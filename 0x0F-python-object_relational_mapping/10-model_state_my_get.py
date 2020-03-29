#!/usr/bin/python3
"""Write a script that prints the State object with the name
    passed as argument from the database hbtn_0e_6_usa"""
from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import State, Base

if __name__ == '__main__':
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'
                           .format(argv[1], argv[2], argv[3]))
    Session = sessionmaker(bind=engine)
    session = Session()
    Base.metadata.create_all(engine)
    arr = []
    for stateId in session.query(State.id)\
                          .filter(State.name == '{:s}'.format(argv[4])):
        arr.append(stateId)
    try:
        print(arr[0][0])
    except:
        print("Not found")
    session.close()
