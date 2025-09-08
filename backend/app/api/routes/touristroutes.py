from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.utils.security import create_access_token, verify_password, verify_access_token
from fastapi.security import OAuth2PasswordBearer
from app.models.tourist import tourist
from app.schemas.tourist import TouristCreate, TouristResponse, TouristAuth, TouristAuthResponse
from typing import List, Optional

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/tourist/touristAuth")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_access_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

@router.post("/addtourist", response_model=TouristResponse)
def add_tourist(member: TouristCreate, db: Session = Depends(get_db)):
    if not member.aadhar_no and not member.passport_no:
        raise HTTPException(status_code=400, detail="Either Aadhar number or Passport number must be provided")
    if member.aadhar_no and member.passport_no:
        raise HTTPException(status_code=400, detail="Provide only one identifier: either Aadhar or Passport")

    if member.aadhar_no:
        existing = db.query(tourist).filter(tourist.aadhar_no == member.aadhar_no).first()
        if existing:
            raise HTTPException(status_code=400, detail="A tourist with this Aadhar number already exists")
    if member.passport_no:
        existing = db.query(tourist).filter(tourist.passport_no == member.passport_no).first()
        if existing:
            raise HTTPException(status_code=400, detail="A tourist with this Passport number already exists")

    new_member = tourist(
        aadhar_no=member.aadhar_no,
        passport_no=member.passport_no,
        password=member.password
    )
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return {"message": "Tourist added successfully", "tourist_id": new_member.tourist_id}

@router.post("/touristAuth", response_model=TouristAuthResponse)
def tourist_auth(tourist_member: TouristAuth, db: Session = Depends(get_db)):
    member = None
    if tourist_member.aadhar_no:
        member = db.query(tourist).filter(
            tourist.aadhar_no == tourist_member.aadhar_no,
            tourist.password == tourist_member.password
        ).first()
    elif tourist_member.passport_no:
        member = db.query(tourist).filter(
            tourist.passport_no == tourist_member.passport_no,
            tourist.password == tourist_member.password
        ).first()
    else:
        raise HTTPException(status_code=400, detail="You must provide either Aadhar number or Passport number")

    if not member:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"tourist_id": member.tourist_id})
    return {"access_token": access_token, "token_type": "bearer"}