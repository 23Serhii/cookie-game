from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from .config import Config

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)  
    mongo.init_app(app)
    
    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)
    
    return app
