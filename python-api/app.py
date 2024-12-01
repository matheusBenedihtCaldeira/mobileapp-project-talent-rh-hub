from fastapi import FastAPI, APIRouter
from core.db_connection import get_connection, close_connection
from routes.skill_gap_routes import api_skill_gap

app = FastAPI()

api = APIRouter(prefix='/api')
api.include_router(api_skill_gap)
app.include_router(api)