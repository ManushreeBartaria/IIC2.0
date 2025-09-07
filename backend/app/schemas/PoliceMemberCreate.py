from pydantic import BaseModel

class PoliceMemberCreate(BaseModel):
    name: str
    password: str
    station_id: int
    
    class Config:
        orm_mode = True

class PoliceMemberResponse(BaseModel):
    message: str
    member_id: int
    
    class Config:
        orm_mode = True

class policeauth(BaseModel):
    station_id: int
    member_id: int
    password: str
    
    class Config:
        orm_mode = True
        
class PoliceAuthResponse(BaseModel):
    message: str
    station_id: int
    member_id: int
    member_name: str
    
    class Config:
        orm_mode = True         