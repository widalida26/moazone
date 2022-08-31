import fastapi
import os  
import requests
import datetime
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel                                                                                                                                                                                                      
from dotenv import load_dotenv
from pathlib import Path
from connection import connect_engine
from models import Users
from models import SurveyInfo

app = fastapi.FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"]
)

load_dotenv(Path(".env"))

engine = connect_engine()
session = engine.sessionmaker()


class AuthItem(BaseModel):
    authcode: str

class UserInfo(BaseModel):
    id: int
    user_id: str
    class Config:
        orm_mode=True

class SurveyItem(BaseModel):
    user_id: str
    survey_data: object

def dday_calculator(day):
    today = datetime.now().date()
    target_date = datetime.strptime(day, '%Y-%m-%d').date()
    dday = target_date - today
    return dday.days

@app.get('/')   
def read_root():
    return {"Hello": "World"}

@app.post('/auth/kakao')
async def kakao_auth(authItem: AuthItem):
    kakao_auth_url = 'https://kauth.kakao.com/oauth/token'
    auth_data = {
    "grant_type" : "authorization_code",
    "client_id" : os.environ.get('KAKAO_REST_API_KEY'),
    "redirect_uri" : os.environ.get('CALLBACK_URL'),
    "code" : authItem.authcode
    }

    # 인가 코드로 토큰 요청
    response = requests.post(kakao_auth_url, data=auth_data)
    token_data = response.json()
    access_token = token_data['access_token']

    # 토큰으로 유저 데이터 요청
    user_profile = requests.get(
                'https://kapi.kakao.com//v2/user/me', 
                headers={'Authorization' : 'Bearer {}'.format(access_token)}
                )
    user_id = user_profile.json()['id']

    # id 예외처리 >>> 나중에 삭제
    if user_id == 2408139919:
        return {'user_id': user_id}

    # 유저 중복 참여 체크
    # existed = session.query(Users).filter(Users.user_id == user_id, Users.consent == 1).all()
    existed = session.query(Users).filter(Users.user_id == user_id, Users.consent == 1).all()

    # 새로운 id 삽입
    if len(existed) < 1: 
        newUser = Users(user_id = user_id)
        session.add(newUser)
        session.commit()
        return {'user_id': user_id }
    else:
        return {'message': 'already existed'}

@app.post('/survey')
async def survey_info(surveyItem: SurveyItem):
    # users 동의 여부 업데이트
    session.query(Users).filter(Users.user_id == surveyItem.user_id).update({ Users.consent: 1 })
    session.commit()
    # new survey 데이터 삽입
    dt = surveyItem.survey_data
    survey_info = SurveyInfo(
        gender = dt['gender'][0],
        car = dt['car'][0],
        reality = dt['reality'][0],
        child_num = int(dt['child_num']),
        income_total = int(dt['income_total']),
        income_type = dt['income_type'],
        edu_type = dt['edu_type'],
        family_type = dt['family_type'],
        house_type = dt['house_type'],
        DAYS_BIRTH = dday_calculator(dt['DAYS_BIRTH'][0:10]),
        DAYS_EMPLOYED = dday_calculator(dt['DAYS_EMPLOYED'][0:10]),
        FLAG_MOBIL = 1 if dt['FLAG_MOBIL'] == 'Yes' else 0,
        work_phone = 1 if dt['work_phone'] == 'Yes' else 0,
        phone = 1 if dt['phone'] == 'Yes' else 0,
        email = 1 if dt['email'] == 'Yes' else 0,
        occyp_type = dt['occyp_type'],
        family_size = dt['family_size'],
        begin_month = dday_calculator(dt['begin_month'][0:10]),
    )

    session.add(survey_info)
    session.commit()




