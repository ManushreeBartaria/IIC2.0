from pydantic import BaseModel
from typing import List
from pydantic import BaseModel

class govermentCreate(BaseModel):
    government_id: int
    password: str
    
    model_config = {
        "from_attributes": True
    }

class governmentResponse(BaseModel):
    message: str
    government_id: int
    
    model_config = {
        "from_attributes": True
    }

class governmentAuth(BaseModel):
    password: str
    
    model_config = {
        "from_attributes": True
    }
        
class governmentauthresponse(BaseModel):
    message: str
    
    model_config = {
        "from_attributes": True
    }   

class governmentSearchFIRcreate(BaseModel):
    region: str
    
    model_config = {
        "from_attributes": True
    }    

class GovernmentSearchFIRResponse(BaseModel):
    firs: List[dict]   

    model_config = {
        "from_attributes": True
    }
    
