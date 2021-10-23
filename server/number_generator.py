from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table
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
    for military_time_hour in range(13, 20):
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
        add_historical_data(conn, 'pagliacci_historical', [date, military_time_hour,
                                                           average_number_of_people, minutes_spent_per_person])


def add_historical_lander_data_for_range_of_dates(conn):
    date = datetime.datetime.now().strftime("%x")
    for military_time_hour in range(10, 17):
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
        add_historical_data(conn, 'lander_desk_historical', [date, military_time_hour,
                                                             average_number_of_people, minutes_spent_per_person])


def predict_amount_of_time_spent(conn, table_name):
    # Get military hour right now
    military_hour = datetime.datetime.now().strftime("%H")


conn = connect()

historical_tables = ['pagliacci_historical', 'lander_desk_historical']
current_tables = ['pagliacci_current', 'lander_desk_current']

"""for table in historical_tables:
    drop_table(conn, table)

for table in current_tables:
    drop_table(conn, table)

create_tables(conn)"""

# add_historical_pag_data_for_range_of_dates(conn)
# add_historical_lander_data_for_range_of_dates(conn)
