import fastapi
import os  
import requests
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel                                                                                                                                                                                                      
from dotenv import load_dotenv
from pathlib import Path
from connection import connect_engine
from models import Users

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

def addUserId():
    session.query(Users).all()

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

    # 유저 중복 참여 체크
    existed = session.query(Users).filter(Users.user_id == user_id).all()

    # 새로운 id 삽입
    if len(existed) < 1: 
        newUser = Users(user_id = user_id)
        session.add(newUser)
        session.commit()
        return {'message': 'new user'}
    else:
        return {'message': 'already existed'}

