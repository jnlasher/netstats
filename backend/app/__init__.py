from flask import Flask
from flask_cors import CORS
from config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Register blueprints
    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix="/api"  )

    return app

from app import models
