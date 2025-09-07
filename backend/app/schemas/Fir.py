from pydantic import BaseModel, Field
from typing import Optional
from datetime import date, time

class FirCreate(BaseModel):
    fullname: str = Field(..., example="John Doe")
    age: int = Field(..., example=30)
    gender: str = Field(..., example="Male")
    address: str = Field(..., example="123 Main Street, City")
    contact_number: str = Field(..., example="+911234567890")
    id_proof_type: str = Field(..., example="Aadhar")
    id_proof_value: Optional[str] = Field(None, example="1234-5678-9012")  
    incident_date: date = Field(..., example="2025-09-07")
    incident_time: time = Field(..., example="14:30")
    offence_type: str = Field(..., example="Theft")
    incident_location: str = Field(..., example="Downtown Market")
    case_narrative: str = Field(..., example="Detailed description of the incident...")

    model_config = {
        "from_attributes": True
    }

class FirResponse(BaseModel):
    message: str
    report_id: str
    
    model_config = {
        "from_attributes": True
    }    