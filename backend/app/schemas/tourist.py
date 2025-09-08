from pydantic import BaseModel
from typing import Optional
from .Fir import FIRProgressResponse

class TouristCreate(BaseModel):

    aadhar_no: Optional[str] = None
    passport_no: Optional[str] = None
    password: str

    model_config = {
        "from_attributes": True
    }


class TouristResponse(BaseModel):
    message: str


    model_config = {
        "from_attributes": True
    }


class TouristAuth(BaseModel):
    aadhar_no: Optional[str] = None
    passport_no: Optional[str] = None
    password: str

    model_config = {
        "from_attributes": True
    }


class TouristAuthResponse(BaseModel):
    access_token: str
    token_type: str

    model_config = {
        "from_attributes": True
    }
    
class touristcheckfirrequest(BaseModel):
    fir_id: str
    model_config = {
        "from_attributes": True
    }    
    
class touristcheckfirresponse(BaseModel):
     progress: int
     model_config = {
        "from_attributes": True
     }