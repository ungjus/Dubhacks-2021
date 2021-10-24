import json
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table

conn = connect()

HOST_IP = 'localhost'
HOST_PORT = '4040'

app = Flask(__name__)
sio = SocketIO(app, cors_allowed_origins="*")

locations = ['pagliaccis', 'lander_desk']


@sio.on("New Person")
def add_person(profile):
    print('new person added!')
    print(profile)
    email = profile['email']
    givenName = profile['givenName']
    familyName = profile['familyName']
    location = profile['location']
    if location == "pagliaccis":
        table_name = "pagliacci_current"
    else:
        table_name = "lander_desk_current"
    add_one_person_to_line(conn, table_name, [givenName, familyName, email])
    number_in_line = check_number_in_line(conn, table_name, email)
    print("Your number is:")
    print(number_in_line)
    print("Number of people in line:")
    print("Predicted amount of time to wait in line:")

@sio.on("Remove Person")
def remove_person(profile):
    print('removed person!')
    print(profile)

@sio.on("Send Location")
def send_location():
    print('sending locations')
    sio.emit('Get Locations', locations)




if __name__ == '__main__':
    print('hello world')
    sio.run(app, host=HOST_IP, port=HOST_PORT)
