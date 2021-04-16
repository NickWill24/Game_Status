from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.user import User
from models.post import Post
from models.game import Game
from resources.auth import Login, Register
from resources.post import Posts, SinglePost, PostGame
from resources.game import Games, SingleGame , GamePosts
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/game_status"
app.config['SQLALCHEMY_ECHO'] = True


db.init_app(app)
migrate = Migrate(app,db)

api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')

api.add_resource(Posts, '/posts')
api.add_resource(SinglePost, '/posts/<int:id>')
api.add_resource(PostGame, '/posts/game/<int:id>')

api.add_resource(Games, '/games')
api.add_resource(SingleGame, '/games/<int:id>')
api.add_resource(GamePosts, '/games/post/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)