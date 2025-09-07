import uuid
from sqlalchemy import Column, String, Integer, Date, Time
from app.database.connection import Base

class FirRegistration(Base):
    __tablename__ = "Fir_Registration"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, index=True)
    fullname = Column(String(100), nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String(20), nullable=False)
    address = Column(String(200), nullable=False)
    contact_number = Column(String(20), nullable=False)
    id_proof_type = Column(String(50), nullable=False)  
    id_proof_value = Column(String(100), nullable=True)
    incident_date = Column(Date, nullable=False)
    incident_time = Column(Time, nullable=False)
    offence_type = Column(String(100), nullable=False)
    incident_location = Column(String(200), nullable=False)
    case_narrative = Column(String(1000), nullable=False)
