from postgre import connect, create_tables, table_exists, add_historical_data, add_one_person_to_line
from postgre import remove_first_person, check_number_in_line, drop_table, check_number_of_people_in_line
from postgre import remove_specific_person
import datetime

x = datetime.datetime.now().strftime("%x")
print(x)

conn = connect()

#historical_tables = ["pagliacci_historical", "lander_desk_historical"]
#current_tables = ["pagliacci_current", "lander_desk_current"]

#for table in historical_tables:
    #drop_table(conn, table)

#for table in current_tables:
    #drop_table(conn, table)

#create_tables(conn)

#add_historical_data(conn, "lander_desk_historical", [x, 1, 10, 2])

add_one_person_to_line(conn, "lander_desk_current", ['Han', 'Nguyen', 'han@gmail.com'])

print(check_number_in_line(conn, "lander_desk_current", 'han@gmail.com'))

remove_specific_person(conn, "lander_desk_current", 'han@gmail.com')

#for i in range(0,20):
    #remove_first_person(conn, "lander_desk_current")

print(check_number_of_people_in_line(conn, "lander_desk_current"))

