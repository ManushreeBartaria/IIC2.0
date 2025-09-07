from pydantic import BaseModel

class StationCreate(BaseModel):
    name: str
    location: str
    
    class Config:
        orm_mode = True

class StationResponse(BaseModel):
    message: str
    station_id: int
    
    class Config:
        orm_mode = True
        
