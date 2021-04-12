from models.db import db
from datetime import datetime


class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(225))
    password_digest = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())


    def __init__(self,name, email, password_digest ):
        self.name = name
        self.email = email
        self.password_digest = password_digest 


    def json(self):
        return {"id": self.id,
                "name": self.name,
                "email":self.email,
                "description": self.password_digest,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()

    @classmethod
    def find_one(cls, email):
        user = User.query.filter_by(email=email).first()
        return user