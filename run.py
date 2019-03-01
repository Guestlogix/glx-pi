from server.app import create_app
from server.settings import DevConfig, ProdConfig

(socketio, app) = create_app(DevConfig)

if __name__ == '__main__':
    print(socketio)
    print(app)
    socketio.run(app, debug=True)