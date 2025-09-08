from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.connection import Base
from sqlalchemy.orm import relationship
from sqlalchemy import Text, DateTime
from sqlalchemy.sql import func

class tourist(Base):
    __tablename__ = "tourist_login"

    tourist_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    aadhar_no = Column(String(100), nullable=True, unique=True)
    passport_no = Column(String(100), nullable=True, unique=True)
    password = Column(String(100), nullable=False)
    
    complaints = relationship("complaint", back_populates="tourist")

class complaint(Base):
    __tablename__ = "touristcomplaints"

    complaint_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    tourist_id = Column(Integer, ForeignKey("tourist_login.tourist_id"), nullable=False)
    crime_type = Column(String(100), nullable=False)         
    description = Column(Text, nullable=False)
    location = Column(String(255), nullable=True)
    status = Column(String(50), nullable=False, default="registered") 
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    tourist = relationship("tourist", back_populates="complaints")  