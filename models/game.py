from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Game(db.Model):
    __tablename__='games'
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(80))
    rating = db.Column(db.Integer)
    category = db.Column(db.String(225))
    esrb_rating = db.Column(db.String(225))
    rawg_id= db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())
    posts= db.relationship("Post", cascade='all', backref=db.backref('posts', lazy=True))


    def __init__(self, name, rating, category, esrb_rating, rawg_id):
        self.name= name
        self.rating= rating
        self.category = category, 
        self.esrb_rating = esrb_rating
        self.rawg_id= rawg_id

    def json(self):
        return {"id": self.id,
                "name":self.name,
                "rating": self.rating,
                "category": self.category,
                "esrb_rating": self.esrb_rating,
                "rawg_id":self.rawg_id,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}


    def create(self):
        db.session.add(self)
        db.session.commit()
        return self


    @classmethod
    def find_all(cls):
        return Game.query.all()


    @classmethod
    def find_by_id(cls, id):
        return Game.query.filter_by(id=id).first()

    @classmethod
    def include_post(cls, game_id):
        game = Game.query.options(joinedload('posts')).filter_by(id=game_id).first()
        posts = [c.json() for c in game.posts]
        return {**game.json(), "posts":posts}