from pydantic import BaseModel

class citizenCreate(BaseModel):
    citizen_id: int
    aadhar_no: str
    password: str
    
    model_config = {
        "from_attributes": True
    }

class citizenResponse(BaseModel):
    message: str
    citizen_id: int
    
    model_config = {
        "from_attributes": True
    }

class citizenAuth(BaseModel):
    aadhar_no: str
    password: str
    
    model_config = {
        "from_attributes": True
    }
        
class citizenauthresponse(BaseModel):
    access_token: str
    token_type: str
    
    model_config = {
        "from_attributes": True
    }    
    
class citizenlocationrequest(BaseModel):
    citizen_id: int
    latitude: float
    longitude: float
    
    model_config = {
        "from_attributes": True
    }    
    
class citizenlocationresponse(BaseModel):
    message: str
    
    model_config = {
        "from_attributes": True
    }    
    
