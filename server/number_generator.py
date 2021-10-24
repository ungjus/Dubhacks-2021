from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table, grab_historical_data
from postgre import check_number_in_line
import json
import plotly
import plotly.express as px
import numpy as np
import datetime


def generate_random_number(mean, state):
    if state == 'high':
        x = np.random.normal(mean * 3, mean / 2, size=(1, 1))
    elif state == 'medium':
        x = np.random.normal(mean * 2, mean / 3, size=(1, 1))
    else:
        x = np.random.normal(mean, mean / 4, size=(1, 1))
    x = x[0][0]
    if x < 0:
        x = -x
    x = "{:.1f}".format(x)
    return x


def add_historical_pag_data_for_range_of_dates(conn):
    date = datetime.datetime.now().strftime("%x")
    for military_time_hour in range(13, 21):
        if military_time_hour == 13:
            state = 'high'
        elif military_time_hour == 19:
            state = 'high'
        elif military_time_hour == 20:
            state = 'high'
        elif military_time_hour == 14:
            state = 'medium'
        elif military_time_hour == 15:
            state = 'medium'
        elif military_time_hour == 18:
            state = 'medium'
        else:
            state = 'low'
        average_number_of_people = generate_random_number(5, state)
        minutes_spent_per_person = generate_random_number(2, state)
        add_historical_data(conn, "pagliacci_historical", [date, military_time_hour,
                                                           average_number_of_people, minutes_spent_per_person])
    for military_time_hour in range(21, 25):
        add_historical_data(conn, "pagliacci_historical", [date, military_time_hour, 0, 0])
    for military_time_hour in range(1, 13):
        add_historical_data(conn, "pagliacci_historical", [date, military_time_hour, 0, 0])


def add_historical_lander_data_for_range_of_dates(conn):
    date = datetime.datetime.now().strftime("%x")
    for military_time_hour in range(10, 18):
        if military_time_hour == 17:
            state = 'high'
        elif military_time_hour == 16:
            state = 'high'
        elif military_time_hour == 15:
            state = 'high'
        elif military_time_hour == 14:
            state = 'medium'
        elif military_time_hour == 13:
            state = 'medium'
        elif military_time_hour == 12:
            state = 'medium'
        else:
            state = 'low'
        average_number_of_people = generate_random_number(5, state)
        minutes_spent_per_person = generate_random_number(2, state)
        add_historical_data(conn, "lander_desk_historical", [date, military_time_hour,
                                                             average_number_of_people, minutes_spent_per_person])
    for military_time_hour in range(1, 10):
        add_historical_data(conn, "lander_desk_historical", [date, military_time_hour, 0, 0])
    for military_time_hour in range(18, 25):
        add_historical_data(conn, "lander_desk_historical", [date, military_time_hour, 0, 0])


def time_convert(time):
    if time == 12:
        return str(time) + " pm"
    elif time == 24:
        return str(time - 12) + " am"
    elif time > 12:
        return str(time - 12) + " pm"
    else:
        return str(time) + " am"


def json_graphs(conn):
    dataframe_pag = grab_historical_data(conn, "pagliacci_historical")
    dataframe_lander = grab_historical_data(conn, "lander_desk_historical")

    dataframe_pag = dataframe_pag[["average_number_of_people",
                                   "military_time_hour"]].sort_values(by=["military_time_hour"])
    dataframe_pag["military_time_hour"] = dataframe_pag["military_time_hour"].apply(time_convert)

    dataframe_lander = dataframe_lander[["average_number_of_people",
                                         "military_time_hour"]].sort_values(by=["military_time_hour"])
    dataframe_lander["military_time_hour"] = dataframe_lander["military_time_hour"].apply(time_convert)

    fig_pag = px.bar(dataframe_pag, x="military_time_hour", y="average_number_of_people", barmode="group")
    fig_lander = px.bar(dataframe_pag, x="military_time_hour", y="average_number_of_people", barmode="group")
    return [fig_pag, fig_lander]


def create_arrays(conn):
    dataframe_pag = grab_historical_data(conn, "pagliacci_historical")
    dataframe_lander = grab_historical_data(conn, "lander_desk_historical")

    dataframe_pag = dataframe_pag[["average_number_of_people",
                                   "military_time_hour"]].sort_values(by=["military_time_hour"])
    dataframe_pag["military_time_hour"] = dataframe_pag["military_time_hour"].apply(time_convert)

    dataframe_lander = dataframe_lander[["average_number_of_people",
                                         "military_time_hour"]].sort_values(by=["military_time_hour"])
    dataframe_lander["military_time_hour"] = dataframe_lander["military_time_hour"].apply(time_convert)

    x_pag = list(dataframe_pag["military_time_hour"])
    y_pag = list(dataframe_pag["average_number_of_people"])
    for i in range(len(y_pag)):
        y_pag[i] = float(y_pag[i])
    x_lander = list(dataframe_lander["military_time_hour"])
    y_lander = list(dataframe_lander["average_number_of_people"])
    for i in range(len(y_lander)):
        y_lander[i] = float(y_lander[i])

    return [x_pag, y_pag, x_lander, y_lander]


def predict_amount_of_time_spent(conn, historical_table_name, current_table_name, email):
    # Get military hour right now
    military_hour = int(datetime.datetime.now().strftime("%H")) - 1
    df = grab_historical_data(conn, historical_table_name)
    df = df[["military_time_hour", "minutes_spent_per_person"]]
    df = df.loc[df["military_time_hour"] == military_hour]["minutes_spent_per_person"].values[0]
    if df is None:
        return 0
    average_time_per_person = df
    number_in_line = check_number_in_line(conn, current_table_name, email)
    estimated_time = (number_in_line - 1) * average_time_per_person
    if estimated_time < 0:
        estimated_time = 0
    return estimated_time
