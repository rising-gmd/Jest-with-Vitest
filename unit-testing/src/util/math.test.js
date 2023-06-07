import { it, expect } from "vitest";
import { add } from "../math";

/* If all the members of array are  */
it('Should summarize all the nummbers', () => {
    //Arrange
    const input = [1,2,3,4]
    const output = input.reduce((prevVal, currVal) => prevVal + currVal, 0)

    //Act
    const result = add(input)

    //Assert
    expect(result).toBe(output)
})

/* If members have different data types  */
it ('Should return NaN if one of the inputs data type is different', () => {
    //Arrange
    const input = ['Pakistan', 1]

    //Act
    const result = add(input)

    //Assert
    expect(result).toBeNaN()
})

/* If members are strings then still It should add */
it('should add the strings of array', () => {
    //Arrange
    const input = ['1', '2', '3']
    const output = input.reduce((currVal, prevVal) => +currVal + +prevVal, 0)

    //Act
    const result = add(input)

    //Assert
    expect(result).toBe(output)
})

/* If no input array then sum should be zero */
it('Should return sum as 0 if array is empty', () => {
    //Arrange
    const input = []
    const output = input.reduce((prevVal, currentVal) => prevVal + currentVal, 0)

    //Act
    const result = add(input)

    //Assert
    expect(result).toBe(output)
})

/* It should throw an error if no value is apssed */
it('Throw an error if there is no parameter passed', () => {
    //Act
    const result = () => {
        add()
    }

    //Assert
    expect(result).toThrow()
})

/* It should throw an error if arguements instead of an array is passed */
it('Should throw an error if params instead of array is passed', () => {
    //Arrangement
    const num1 = 1
    const num2=  2

    //Act
    const result = () => {
        add(num1, num2)
    }

    //Assert
    expect(result).toThrow()
})






    

