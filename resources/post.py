from flask_restful import Resource
from flask import request
from models.post import Post
from models.db import db

class Posts(Resource):
    def get(self):
        data = Post.find_all()
        results = [u.json() for u in data]
        return results

    def post(self):
        data = request.get_json()
        post = post(**data)
        idea.create()
        return post.json(),201


class SinglePost(Resource):
    def get(self, id):
            post= Post.find_by_id(id)
            return idea.json()

    def delete(self, id):
        idea = Post.find_by_id(id)
        db.session.delete(post)
        db.session.commit()
        return{"msg": 'Post deleted', 'payload': post.id}

    def put(self, id):
        post = Post.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(post,key,data[key])
        db.session.commit()
        return post.json()