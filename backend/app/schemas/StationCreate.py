from pydantic import BaseModel

class StationCreate(BaseModel):
    name: str
    location: str
    
    model_config = {
        "from_attributes": True
    }

class StationResponse(BaseModel):
    message: str
    station_id: int
    
    model_config = {
        "from_attributes": True
    }
        
