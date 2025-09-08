from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.connection import Base
from sqlalchemy.orm import relationship

class government(Base):
    __tablename__ = "government_login"

    government_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    password = Column(String(100), nullable=False)