from pydantic import BaseModel
from typing import Optional

class TouristCreate(BaseModel):
    tourist_id: int
    aadhar_no: Optional[str] = None
    passport_no: Optional[str] = None
    password: str

    model_config = {
        "from_attributes": True
    }


class TouristResponse(BaseModel):
    message: str
    tourist_id: int

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
    message: str

    model_config = {
        "from_attributes": True
    }
