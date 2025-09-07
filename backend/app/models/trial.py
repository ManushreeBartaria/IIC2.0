from sqlalchemy import Column, Integer, String
from app.database.connection import Base

class Trial(Base):
    __tablename__ = "trial"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    email = Column(String(100), unique=True, index=True)
