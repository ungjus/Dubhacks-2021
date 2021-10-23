import psycopg2
from psycopg2 import sql
from config_helper import config_sql


def connect():
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config_sql()

        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)

        # create a cursor
        with conn.cursor() as cur:
            # execute a statement
            print('PostgreSQL database version:')
            cur.execute('SELECT version()')

            # display the PostgreSQL database server version
            db_version = cur.fetchone()
            print(db_version)

        # close the communication with the PostgreSQL
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    return conn


def create_tables(conn):
    """ create tables in the PostgreSQL database"""
    commands = (
        """
        CREATE TABLE pagliacci_historical (
            id serial primary key,
            date DATE,
            military_time_hour decimal,
            number_of_people decimal,
            minutes_spent_per_person decimal
        )
        """,
        """
        CREATE TABLE pagliacci_current (
            line_number serial primary key,
            givenName TEXT,
            familyName TEXT,
            email TEXT
        )
        """,
        """
        CREATE TABLE lander_desk_historical (
            id serial primary key,
            date DATE,
            military_time_hour decimal,
            number_of_people decimal,
            minutes_spent_per_person decimal
        )
        """,
        """
        CREATE TABLE lander_desk_current (
            line_number serial primary key,
            givenName TEXT,
            familyName TEXT,
            email TEXT
        )
        """,
    )
    try:
        # get connection cursor
        with conn.cursor() as cur:
            # create table one by one
            for command in commands:
                cur.execute(command)
        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


def table_exists(conn, table_name):
    """ check if tables exist in the PostgreSQL database"""
    value = False
    try:
        # get connection cursor
        with conn.cursor() as cur:
            # Check if table exists
            cur.execute("""SELECT COUNT(*)FROM information_schema.tables 
            WHERE table_name = '{0}'""".format(table_name.replace('\'', '\'\'')))
            if cur.fetchone()[0] == 1:
                value = True
        # Close communication with the PostgreSQL database server
        cur.close()
        # Commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    return value


def drop_table(conn, table_name):
    try:
        # Get connection cursor
        with conn.cursor() as cur:
            # Drop table
            cur.execute(sql.SQL('DROP TABLE IF EXISTS {}').format(sql.Identifier(table_name)))
        # Close communication with the PostgreSQL database server
        cur.close()
        # Commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


def add_historical_data(conn, table_name, data):
    try:
        # Get connection cursor
        with conn.cursor() as cur:
            # Place data in table
            cur.execute(sql.SQL("""Insert into {}
                (date, military_time_hour, number_of_people, minutes_per_person) 
                VALUES(%s, %s, %s, %s)""").format(sql.Identifier(table_name)),
                        [data[0], data[1], data[2], data[3]])
            # close communication with the PostgreSQL database server
            cur.close()
            # Commit the changes
            conn.commit()
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)


def add_one_person_to_line(conn, table_name, data):
    try:
        # Get connection cursor
        with conn.cursor() as cur:
            # Place data in table
            cur.execute(sql.SQL("""Insert into {}
                        (givenName, familyName, Email) VALUES(%s,%s,%s)""").format(sql.Identifier(table_name)),
                        data[0], data[1], data[2])
            # close communication with the PostgreSQL database server
            cur.close()
            # Commit the changes
            conn.commit()
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)


def remove_first_person(conn, table_name):
    try:
        # Get connection cursor
        with conn.cursor() as cur:
            # Remove first person in line
            cur.execute(sql.SQL("""Delete from {} where line_number = 1""").format(sql.Identifier(table_name)))
            # close communication with the PostgreSQL database server
            cur.close()
            # Commit the changes
            conn.commit()
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)


def check_number_in_line(conn, table_name, email):
    try:
        # Get connection cursor
        with conn.cursor() as cur:
            # Remove first person in line
            cur.execute(sql.SQL("""SELECT number_in_line from {} 
                WHERE email = %s""").format(sql.Identifier(table_name)), [[email]])
            number_in_line = cur.fetchone()
            # close communication with the PostgreSQL database server
            cur.close()
            # Commit the changes
            conn.commit()
            return number_in_line
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)
