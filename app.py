from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/game_status"
app.config['SQLALCHEMY_ECHO'] = True


db.init_app(app)
migrate = Migrate(app,db)


if __name__ == '__main__':
    app.run(debug=True)