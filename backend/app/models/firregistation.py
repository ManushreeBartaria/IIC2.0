import uuid
from sqlalchemy import Column, String, Integer, Date, Time, ForeignKey
from app.database.connection import Base
from sqlalchemy.orm import relationship
from datetime import datetime
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
    
    progress_updates = relationship("FIRProgress", back_populates="fir")
    closed_entry = relationship("closedFir", back_populates="original_fir", uselist=False)
    
class FIRProgress(Base):
        __tablename__ = "fir_progress"
        id = Column(Integer, primary_key=True, index=True, autoincrement=True)
        fir_id = Column(String(36), ForeignKey("Fir_Registration.id"))
        progress = Column(Integer)

        fir = relationship("FirRegistration", back_populates="progress_updates")
        
class closedFir(Base):
    __tablename__ = "closed_fir"
    
    id = Column(Integer, primary_key=True, index=True,autoincrement=True)
    fir_id = Column(String(36), ForeignKey("Fir_Registration.id"))
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
    
    original_fir = relationship("FirRegistration", back_populates="closed_entry")       