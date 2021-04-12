import bcrypt
import jwt 
from dotenv import load_dotenv
import os


load_dotenv()

SECRET_KEY = os.getenv('APP_SECRET') 

def create_token(payload):
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")


def create_token(payload):
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")