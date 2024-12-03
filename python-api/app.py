from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routes.skill_gap_routes import api_skill_gap

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

api = APIRouter(prefix='/api')
api.include_router(api_skill_gap)

app.include_router(api)