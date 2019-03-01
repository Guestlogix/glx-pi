#!/usr/bin/env python
from threading import Lock
from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect
#from flask_cors import CORS
from .settings import ProdConfig
from server import main, github #,slack

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

def create_app(config_object=ProdConfig):
    app = Flask(__name__, static_folder='./static')
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)
    #setup_cors(app)
    register_blueprints(app)
    thread = None
    thread_lock = Lock()
    socketio = SocketIO(app, async_mode=async_mode)
    return (socketio, app)


# def setup_cors(app):
#     cors = CORS()
#     origins = app.config.get('CORS_ORIGIN_WHITELIST', '*')
#     cors.init_app(main.views.blueprint, origins=origins)
#     cors.init_app(github.views.blueprint, origins=origins)
#     cors.init_app(slack.views.blueprint, origins=origins)


def register_blueprints(app):
    app.register_blueprint(main.views.blueprint)
    app.register_blueprint(github.views.blueprint)
    #app.register_blueprint(slack.views.blueprint)