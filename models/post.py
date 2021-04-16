from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__='posts'
    id = db.Column(db.Integer, primary_key=True)
    comments = db.Column(db.String(255))
    user_name=db.Column(db.String(225))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())
    game = db.relationship("Game", backref=db.backref('games', lazy=True))


    def __init__(self, comments, game_id, user_name):
        self.comments= comments
        self.game_id= game_id
        self.user_name= user_name


    def json(self):
        return {"id": self.id,
                "comments": self.comments,
                "game_id":self.game_id,
                "user_name":self.user_name,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()


    @classmethod
    def find_all(cls):
        return Post.query.all()

    @classmethod
    def find_by_id(cls, id):
        return Post.query.filter_by(id=id).first()

    @classmethod
    def include_game(cls, post_id):
        post = Post.query.options(joinedload('game')).filter_by(id=post_id).first()
        return {**post.json(), "posts":post.game.json()}