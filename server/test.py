from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table, check_number_of_people_in_line
from postgre import remove_specific_person
from number_generator import predict_amount_of_time_spent, json_graphs, add_historical_lander_data_for_range_of_dates
from number_generator import add_historical_pag_data_for_range_of_dates, create_arrays, create_arrays_current
from number_generator import predict_amount_of_time_spent_without_email
import datetime

x = datetime.datetime.now().strftime("%x")
print(x)

conn = connect()

historical_tables = ["pagliacci_historical", "lander_desk_historical"]
current_tables = ["pagliacci_current", "lander_desk_current"]

#for table in historical_tables:
    #drop_table(conn, table)

#for table in current_tables:
    #drop_table(conn, table)

#create_tables(conn)

add_historical_lander_data_for_range_of_dates(conn)
add_historical_pag_data_for_range_of_dates(conn)

#create_arrays(conn)

#add_historical_data(conn, "lander_desk_historical", [x, 1, 10, 2])

"""future_number_pag = check_number_of_people_in_line(conn, "pagliacci_current")
add_one_person_to_line(conn, "pagliacci_current", [future_number_pag, 'Han', 'Nguyen', 'han3@gmail.com'])
future_number_pag = check_number_of_people_in_line(conn, "pagliacci_current")
add_one_person_to_line(conn, "pagliacci_current", [future_number_pag, 'NotHan', 'Nguyen', 'nothan4@gmail.com'])
future_number_lander = check_number_of_people_in_line(conn, "lander_desk_current")
add_one_person_to_line(conn, "lander_desk_current", [future_number_lander, 'Han', 'Nguyen', 'han3@gmail.com'])
future_number_lander = check_number_of_people_in_line(conn, "lander_desk_current")
add_one_person_to_line(conn, "lander_desk_current", [future_number_lander, 'NotHan', 'Nguyen', 'nothan4@gmail.com'])"""

#print(predict_amount_of_time_spent(conn, "pagliacci_historical", "pagliacci_current", 'han3@gmail.com'))

#print(check_number_in_line(conn, "pagliacci_current", 'han3@gmail.com'))

#remove_specific_person(conn, "pagliacci_current", 'han@gmail.com')

"""for i in range(0,20):
    remove_first_person(conn, "pagliacci_current")
    remove_first_person(conn, "lander_desk_current")"""

# print(predict_amount_of_time_spent_without_email(conn, "lander_desk_historical", "lander_desk_current"))

print(check_number_of_people_in_line(conn, "pagliacci_current"))
print(check_number_of_people_in_line(conn, "lander_desk_current"))

