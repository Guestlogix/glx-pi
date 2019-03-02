import os
from server.app import create_app
from server.settings import DevConfig, ProdConfig

(socketio, app) = create_app(DevConfig)

config = DevConfig
if os.environ.get('FLASK_ENV') == 'PROD':
    config = ProdConfig

if __name__ == '__main__':
    socketio.run(app, debug=config.DEBUG, host=config.HOST)