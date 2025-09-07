from fastapi import FastAPI
from app.database.connection import engine, Base
from app.models import Trial
from app.models import PoliceStation, PoliceMember
from app.api.routes import policememberroutes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(policememberroutes.router, prefix="/policeauth", tags=["Authentication","Add Police Member"])

@app.get("/")
def read_root():
    return {"message": "Backend is working fine 🚀"}




