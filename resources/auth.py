from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password


class Login(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        user = User.find_one(data['email'])
        if user and compare_password(data['password'], user.password_digest):
            payload = {
                "id": user.id,
                "name": user.name
            }
            token = create_token(payload)
            return {"token": token,"current_user": payload}
        return {"msg": "Unauthorized"}, 404

    def get(self):
        token = strip_token(request)
        if token:
            payload = read_token(token)
            return payload
        return 'Unauthorized', 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        params = {
            "name": data['name'],
            "email": data['email'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        user.create()
        return user.json(), 201
