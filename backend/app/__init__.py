from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from .config import Config

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app, resources={r"/*": {"origins": "*"}})  # Додаємо підтримку CORS для всіх маршрутів
    
    mongo.init_app(app)
    
    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)  # Включаємо режим відлагодження
