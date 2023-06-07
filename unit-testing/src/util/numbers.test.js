import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe('transformToNumber', () => {
    it('Should give error if nothing is passed', () => {
        //Arrange
        const result = () => {
            transformToNumber()
        }

        //Assert
        expect(result).toThrow()
    })

    it('Should give error if anything other than string is passed', () => {
        //Arrange
        const input = []

        //Act
        const result = () => {
            transformToNumber(input)
        }

        //Assert
        expect(result).toThrow()
    })

    it('Should give 100 on passing string(100)', () => {
        //Arrange
        const input = '100'
        const output = +input

        //Act
        const result = transformToNumber(input)

        //Assert
        expect(result).toBe(output)
    })

    it('Should give error on non-transformable values', () => {
        //Arrange
        const input = 'Invalid'

        //Act
        const result = transformToNumber(input)

        //Assert
        expect(result).toBeNaN()
    })
})

describe('cleanNumbers', () => {

    it('Should return an array of number values if array of strings values is passed', () => {
        const input = ['1', '2']
        
        const cleanedNumbers = cleanNumbers(input)

        expect(cleanedNumbers).toEqual([1,2])
    })

    it('Should return error if there is any empty string in array', () => {
        const input = ['', '1']

        const cleanFn = () => {
            cleanNumbers(input)
        }

        expect(cleanFn).toThrow()
    })
})


