from flask_restful import Resource
from flask import request
from models.game import Game
from models.db import db

class Games(Resource):
    def get(self):
        data = Game.find_all()
        results = [u.json() for u in data]
        return results

    def post(self):
        data = request.get_json()
        game = Game(**data)
        game.create()
        return game.json(),201


class SingleGame(Resource):
    def get(self, id):
            game= Game.find_by_id(id)
            return game.json()

    def delete(self, id):
        game = Game.find_by_id(id)
        db.session.delete(game)
        db.session.commit()
        return{"msg": 'Game deleted', 'payload': game.id}

    def put(self, id):
        game = Game.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(game,key,data[key])
        db.session.commit()
        return game.json()