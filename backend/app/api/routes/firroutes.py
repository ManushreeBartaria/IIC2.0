from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.schemas.Fir import FirCreate, FirResponse
from app.models.firregistation import FirRegistration

router = APIRouter()

@router.post("/register_incident", response_model=FirResponse)
def register_incident(report: FirCreate, db: Session = Depends(get_db)):
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
        "report_id": new_report.id
    }
