from models.db import db
from datetime import datetime



class Post(db.Model):
    __tablename__='posts'
    id = db.Column(db.Integer, primary_key=True)
    comments = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())


    def __init__(self, comments):
        self.comments= comments


    def json(self):
        return {"id": self.id,
                "comments": self.comments,
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