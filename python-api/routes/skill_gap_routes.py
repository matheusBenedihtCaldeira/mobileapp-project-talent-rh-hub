from fastapi import APIRouter
from controllers.skill_gap_controller import SkillGapController

api_skill_gap = APIRouter(prefix='/skill-gap')


@api_skill_gap.get(
    path='/',
    tags=['skill-gap']
)
async def get_skill_gap():
    try:
        res = SkillGapController.get_skill_gap()
        return res
    except Exception as e:
        raise e