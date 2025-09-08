from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.connection import Base
from sqlalchemy.orm import relationship

class tourist(Base):
    __tablename__ = "tourist_login"

    tourist_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    aadhar_no = Column(String(100), nullable=True, unique=True)
    passport_no = Column(String(100), nullable=True, unique=True)
    password = Column(String(100), nullable=False)
