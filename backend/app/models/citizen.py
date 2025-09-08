from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.connection import Base
from sqlalchemy.orm import relationship

class citizen(Base):
    __tablename__ = "citizen_login"

    citizen_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    aadhar_no = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)
    locations = relationship("citizen_location", back_populates="citizen")
    
class citizen_location(Base):
    __tablename__ = "citizen_location"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    citizen_id = Column(Integer, ForeignKey("citizen_login.citizen_id"))
    latitude = Column(String(50), nullable=False)
    longitude = Column(String(50), nullable=False)
    
    citizen = relationship("citizen", back_populates="locations")   