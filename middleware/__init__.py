import bcrypt
import jwt 
from dotenv import load_dotenv
import os


load_dotenv()

SECRET_KEY = os.getenv('APP_SECRET') 

def create_token(payload):
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")


def read_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.InvalidSignatureError:
        return "Signature Invalid"
    except jwt.InvalidTokenError:
        return "Token Invalid"


def gen_password(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()