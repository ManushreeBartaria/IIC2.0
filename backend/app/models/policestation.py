from sqlalchemy import Column, Integer, String
from app.database.connection import Base
from sqlalchemy.orm import relationship

class PoliceStation(Base):
    __tablename__ = "PoliceStation"

    PSid = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    location = Column(String(100), nullable=False)
    policemember = relationship("PoliceMember", back_populates="policestation")