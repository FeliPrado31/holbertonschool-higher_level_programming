#!/usr/bin/python3
""" Write a class Rectangle that defines
    a rectangle by: (based on 0-rectangle.py) """


class Rectangle:
    """ Write a class Rectangle that defines
        a rectangle by: (based on 0-rectangle.py) """
    def __init__(self, width=0, height=0):
        """Inizialitation
        Args:
            width (int): Private instance attribute: width.
            height (int): Private instance attribute: height.
        """
        self.width = width
        self.height = height

    @property
    def width(self):
        """Get and Set"""
        return self.__width

    @width.setter
    def width(self, value):
        """Set value
        Args:
            value (int): width of the rectangle
        """
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    @property
    def height(self):
        """Get and Set"""
        return self.__height

    @height.setter
    def height(self, value):
        """Set value
        Args:
            value (int): height of the rectangle
        """
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        self.__height = value
