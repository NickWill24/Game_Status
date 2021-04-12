from models.db import db
from datetime import datetime



class Game(db.Model):
    __tablename__='games'
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(80))
    rating = db.Column(db.Integer)
    category = db.Column(db.String(225))
    esrb_rating = db.Column(db.Sting(225))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())


    def __init__(self, name, rating, category, esrb_rating):
        self.name= name
        self.rating= rating
        self.category = category, 
        self.esrb_rating = esrb_rating

    def json(self):
        return {"id": self.id,
                "name":self.name,
                "rating": self.rating,
                "category": self.category,
                "esrb_rating": self.esrb_rating,
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

