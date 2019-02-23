#!/usr/bin/env python
from threading import Lock
from flask import Flask, render_template, session, request
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__, static_folder='./static')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()


def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        socketio.sleep(10)
        count += 1
        socketio.emit('my_response', {'data': 'Server generated event', 'count': count}, namespace='/test')


@app.route('/')
def index():
    return render_template('index.html', async_mode=socketio.async_mode)

@app.route('/slack', methods=['POST'])
def slack():
    message = request.form.get('text', None)
    socketio.emit('my_response',
        {'data': message},
        namespace='/test',
        broadcast=True)
    return 'Success! "{}" should be on the dashboard.'.format(message)

if __name__ == '__main__':
    socketio.run(app, debug=True)