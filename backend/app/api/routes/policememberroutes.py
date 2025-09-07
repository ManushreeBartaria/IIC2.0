from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.models.policemember import PoliceMember
from app.models.policestation import PoliceStation
from app.schemas.StationCreate import StationCreate, StationResponse
from app.schemas.PoliceMemberCreate import PoliceMemberCreate, PoliceMemberResponse, policeauth, PoliceAuthResponse
router = APIRouter()    

@router.post("/policestationdetails", response_model=StationResponse)
def policestationdetails(station: StationCreate, db: Session = Depends(get_db)):
    new_station = PoliceStation(name=station.name, location=station.location)
    db.add(new_station)
    db.commit()
    db.refresh(new_station)
    return {"message": "Police station added successfully", "station_id": new_station.PSid}

@router.post("/addpolicemember", response_model=PoliceMemberResponse)
def add_policemember(member: PoliceMemberCreate, db: Session = Depends(get_db)):
    new_member = PoliceMember(name=member.name, password=member.password, station_id=member.station_id)
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return {"message": "Police member added successfully", "member_id": new_member.member_id}
  
@router.post("/policeauth", response_model=PoliceAuthResponse)
def policeauth(police:policeauth, db: Session = Depends(get_db)):
    member = db.query(PoliceMember).filter(
    PoliceMember.member_id == police.member_id,
    PoliceMember.station_id == police.station_id,
    PoliceMember.password == police.password
).first()
    if not member:
      raise HTTPException(status_code=401, detail="Invalid credentials")
    return {
    "message": "Login successful",
    "station_id": member.station_id,
    "member_id": member.member_id,
    "member_name": member.name
}


