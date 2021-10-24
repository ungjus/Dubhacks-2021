import json
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table, remove_specific_person, \
    check_number_of_people_in_line
import pandas as pd
import plotly
import plotly.express as px
from number_generator import json_graphs, predict_amount_of_time_spent, create_arrays, create_arrays_current

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
        historical_table_name = "pagliacci_historical"
    else:
        table_name = "lander_desk_current"
        historical_table_name = "lander_historical"
    print(table_name)
    future_number_in_line = check_number_of_people_in_line(conn, table_name)
    if future_number_in_line is None:
        future_number_in_line = 0
    add_one_person_to_line(conn, table_name, [future_number_in_line, givenName, familyName, email])
    number_in_line = check_number_in_line(conn, table_name, email)
    sio.emit('Number People', number_in_line)
    print(email)
    print(givenName)
    print(familyName)
    print(location)

    print("Your number is:")
    print(number_in_line)
    print("Number of people in line:")
    print(check_number_of_people_in_line(conn, table_name))
    print("Predicted amount of time to wait in line:")
    print(predict_amount_of_time_spent(conn, historical_table_name, table_name, email))


@sio.on("Remove Person")
def remove_person(profile):
    print('removed person!')
    print(profile)
    email = profile['email']
    location = profile['location']
    if location == "pagliaccis":
        table_name = "pagliacci_current"
    else:
        table_name = "lander_desk_current"
    print(table_name)
    remove_specific_person(conn, table_name, email)
    print("Number of people in line:")
    print(check_number_of_people_in_line(conn, table_name))


@sio.on("Send Location")
def send_location():
    print('sending locations')
    sio.emit('Get Locations', locations)


@sio.on("Get Number People")
def get_num_people(location):
    print(location)
    if location == "pagliaccis":
        table_name = "pagliacci_current"
    else:
        table_name = "lander_desk_current"
    num_in_line = check_number_of_people_in_line(conn, table_name)
    print("num people", num_in_line)
    sio.emit("Number People", num_in_line)


@sio.on("Test Graph")
def test_graph(location):
    # [fig_pag, fig_lander] = json_graphs(conn)
    # graphJSON = json.dumps(fig_lander, cls=plotly.utils.PlotlyJSONEncoder)
    if table_name == "pagliaccis":
        table_name = "pagliacci_current"
    else:
        table_name = "lander_desk_current"
    [x, y] = create_arrays(conn, table_name)
    graph = {'x': x, 'y': y}
    sio.emit("Get Graph", graph)


@sio.on("Send Table Data")
def get_table_data(table_name):
    if table_name == "pagliaccis":
        table_name = "pagliacci_current"
    else:
        table_name = "lander_desk_current"
    [a, b, c, d] = create_arrays_current(conn, table_name)

    sio.emit("Get Table Data", [a, b, c, d])


if __name__ == '__main__':
    print('hello world')
    sio.run(app, host=HOST_IP, port=HOST_PORT)
