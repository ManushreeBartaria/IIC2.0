from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from app.database.connection import Base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.tourist import tourist


class tourist(Base):
    __tablename__ = "tourist_login"

    tourist_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    aadhar_no = Column(String(100), nullable=True, unique=True)
    passport_no = Column(String(100), nullable=True, unique=True)
    password = Column(String(100), nullable=False)

class complaint(Base):
    __tablename__ = "complaints"

    complaint_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    tourist_id = Column(Integer, ForeignKey("tourist_login.tourist_id"), nullable=False)
    crime_type = Column(String(100), nullable=False)        
    description = Column(Text, nullable=False)
    location = Column(String(255), nullable=True)
    status = Column(String(50), nullable=False, default="registered")  
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    tourist = relationship("tourist", backref="complaints")

followups = relationship(
        "complaint_followup",
        backref="complaint",
        cascade="all, delete-orphan",
        passive_deletes=True
    )


class complaint_followup(Base):
    __tablename__ = "complaint_followups"

    followup_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    complaint_id = Column(Integer, ForeignKey("complaints.complaint_id", ondelete="CASCADE"), nullable=False)
    tourist_id = Column(Integer, ForeignKey("tourist_login.tourist_id"), nullable=False)
    note = Column(Text, nullable=False)                     
    requested_action = Column(String(255), nullable=True) 
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    tourist = relationship("tourist", backref="followups")
