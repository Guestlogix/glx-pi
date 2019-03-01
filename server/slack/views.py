#from flask import Blueprint, request

#blueprint = Blueprint('slack', __name__)

# @app.route('/slack', methods=['POST'])
# def slack():
#     message = request.form.get('text', None)
#     socketio.emit('my_response',
#         {'data': message},
#         namespace='/test',
#         broadcast=True)
#     return 'Success! "{}" should be on the dashboard.'.format(message)