from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TouristCreate(BaseModel):
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
    access_token: str
    token_type: str

    model_config = {
        "from_attributes": True
    }

class ComplaintCreate(BaseModel):
    crime_type: str
    description: str
    location: Optional[str] = None

    model_config = {
        "from_attributes": True
    }

class ComplaintResponse(BaseModel):
    message: str
    complaint_id: int

    model_config = {
        "from_attributes": True
    }

class ComplaintDetail(BaseModel):
    complaint_id: int
    tourist_id: int
    crime_type: str
    description: str
    location: Optional[str] = None
    status: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }
