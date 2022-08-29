import fastapi 
import os  
import requests
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from pydantic import BaseModel                                                                                                                                                                                                      
from dotenv import load_dotenv, find_dotenv
from pathlib import Path
from db.session import SessionLocal

load_dotenv(Path(".env"))

app = fastapi.FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"]
)

class AuthItem(BaseModel):
    authcode: str

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
    print(token_data)
    access_token = token_data['access_token']

    # 토큰으로 유저 데이터 요청
    user_profile = requests.get(
                'https://kapi.kakao.com//v2/user/me', 
                headers={'Authorization' : 'Bearer {}'.format(access_token)}
                )
    print(user_profile.json())

