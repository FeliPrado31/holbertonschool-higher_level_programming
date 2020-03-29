#!/usr/bin/python3
""" Model State """
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class State(Base):
    """
    Write a python file that contains the class definition
    of a State and an instance Base = declarative_base():
    """
    __tablename__ = 'states'
    id = Column(Integer, nullable=False,
                autoincrement=True, primary_key=True)
    name = Column(String(128), nullable=False)
