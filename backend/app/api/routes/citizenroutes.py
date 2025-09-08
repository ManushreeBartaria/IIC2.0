from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.utils.security import create_access_token, verify_password, verify_access_token
from fastapi.security import OAuth2PasswordBearer
from app.models.citizen import citizen, citizen_location
from app.schemas.citizen import citizenCreate, citizenResponse, citizenAuth, citizenauthresponse
from app.schemas.citizen import citizenlocationrequest, citizenlocationresponse
from typing import List


router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/citizen/citizenAuth")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_access_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

@router.post("/addcitizen", response_model=citizenResponse)
def add_citizen(member: citizenCreate, db: Session = Depends(get_db)):
    new_member = citizen(aadhar_no=member.aadhar_no, password=member.password)
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return {"message": "Citizen added successfully", "citizen_id": new_member.citizen_id}
  
@router.post("/citizenAuth", response_model=citizenauthresponse)
def citizenauth(citizen_member: citizenAuth, db: Session = Depends(get_db)):
    member = db.query(citizen).filter(
    citizen.aadhar_no == citizen_member.aadhar_no,
    citizen.password == citizen_member.password
).first()
    if not member:
      raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = create_access_token({"citizen_id": member.citizen_id})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/citizenlocation", response_model=citizenlocationresponse)
def update_location(location: citizenlocationrequest, user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    citizen_record = db.query(citizen).filter(citizen.citizen_id == location.citizen_id).first()
    if not citizen_record:
        raise HTTPException(status_code=404, detail="Citizen not found")
    
    location_record = db.query(citizen_location).filter(citizen_location.citizen_id == location.citizen_id).first()
    if location_record:
        location_record.latitude = location.latitude
        location_record.longitude = location.longitude
    else:
        new_location = citizen_location(
            citizen_id=location.citizen_id,
            latitude=location.latitude,
            longitude=location.longitude,
        )
        db.add(new_location)
    
    db.commit()
    return {"message": "Location updated successfully"}