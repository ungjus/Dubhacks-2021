import json
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

HOST_IP = 'localhost'
HOST_PORT = '4040'

app = Flask(__name__)
sio = SocketIO(app, cors_allowed_origins="*")

locations = ['lander', 'lopo']

@sio.on("New Person")
def add_person(profile):
    print('new person added!')
    print(profile)

@sio.on("Send Location")
def send_location():
    print('sending locations')
    sio.emit('Get Locations', locations)

if __name__ == '__main__':
    print('hello world')
    sio.run(app, host=HOST_IP, port=HOST_PORT)