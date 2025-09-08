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
    crime_type = Column(String(100), nullable=False)         # e.g., "theft", "assault"
    description = Column(Text, nullable=False)
    location = Column(String(255), nullable=True)
    status = Column(String(50), nullable=False, default="registered")  # registered, in_progress, closed, etc.
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    tourist = relationship("tourist", backref="complaints")

