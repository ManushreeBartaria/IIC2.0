from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.schemas.Fir import FirCreate, FirResponse, FIRProgressUpdate, FIRProgressRequest, FIRProgressResponse, FIRCloseRequest, FIRCloseResponse
from app.models.firregistation import FirRegistration, closedFir, FIRProgress
from datetime import datetime
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")  # policeman's ID
        user_name = payload.get("name")  # policeman's name
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"id": user_id, "name": user_name}
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.post("/register_incident", response_model=FirResponse)
def register_incident(report: FirCreate,current_user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    new_report = FirRegistration(
        fullname=report.fullname,
        age=report.age,
        gender=report.gender,
        address=report.address,
        contact_number=report.contact_number,
        id_proof_type=report.id_proof_type,
        id_proof_value=report.id_proof_value,
        incident_date=report.incident_date,
        incident_time=report.incident_time,
        offence_type=report.offence_type,
        incident_location=report.incident_location,
        case_narrative=report.case_narrative,
    )
    db.add(new_report)
    db.commit()
    db.refresh(new_report)
    return {
        "message": "Incident registered successfully",
        "report_id": new_report.id,
        "registered_by_id": current_user["id"],
        "registered_by_name": current_user["name"]
    }

@router.post("/add_progress", response_model=FIRProgressResponse)
def add_progress(progress_update: FIRProgressUpdate, db: Session = Depends(get_db)):
    fir = db.query(FirRegistration).filter(FirRegistration.id == progress_update.fir_id).first()
    if not fir:
        raise HTTPException(status_code=404, detail="FIR not found")
    
    from app.models.firregistation import FIRProgress
    new_progress = FIRProgress(
        fir_id=progress_update.fir_id,
        progress=progress_update.progress
    )
    db.add(new_progress)
    db.commit()
    db.refresh(new_progress)
    
    return {
        "progress": new_progress.progress
    }
    
@router.post("/get_progress", response_model=FIRProgressResponse)
def get_progress(progress_request: FIRProgressRequest, db: Session = Depends(get_db)):
    fir = db.query(FirRegistration).filter(FirRegistration.id == progress_request.fir_id).first()
    if not fir:
        raise HTTPException(status_code=404, detail="FIR not found")
    
    from app.models.firregistation import FIRProgress
    progress = db.query(FIRProgress).filter(FIRProgress.fir_id == progress_request.fir_id).order_by(FIRProgress.id.desc()).first()
    if not progress:
        raise HTTPException(status_code=404, detail="No progress updates found for this FIR")
    
    return {
        "progress": progress.progress
    }
    
@router.post("/close_fir", response_model=FIRCloseResponse)
def close_fir(close_request: FIRCloseRequest, db: Session = Depends(get_db)):
    fir = db.query(FirRegistration).filter(FirRegistration.id == close_request.fir_id).first()
    if not fir:
        raise HTTPException(status_code=404, detail="FIR not found")
    
    # Create closed FIR entry
    closed_fir = closedFir(
        fir_id=fir.id,
        fullname=fir.fullname,
        age=fir.age,
        gender=fir.gender,
        address=fir.address,
        contact_number=fir.contact_number,
        id_proof_type=fir.id_proof_type,
        id_proof_value=fir.id_proof_value,
        incident_date=fir.incident_date,
        incident_time=fir.incident_time,
        offence_type=fir.offence_type,
        incident_location=fir.incident_location,
        case_narrative=fir.case_narrative,  
        closed_at=datetime.utcnow().date()
    )
    db.add(closed_fir)

    fir.status = "closed"
    db.add(fir)
    
    db.commit()
    db.refresh(closed_fir)
    
    return {
        "message": "FIR closed successfully",
        "closed_fir_id": closed_fir.id
    }    