import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validateStringNotEmpty', () => {
/*Should return without spaces value when value with spaces is passed*/
it('Should return without spaces value when value with spaces is passed', () => {
    //Arrange
    const input = ''

    //Act
    const result = () => {
        validateStringNotEmpty(input)
    }

    //Assert
    expect(result).toThrow()
})

/*Should return error if no parameter is passed*/
it('Should return error if no parameter is passed', () => {
    //Arrange
    const input = '  '

    //Act
    const result = () => {
        validateStringNotEmpty()
    }

    //Assert
    expect(result).toThrowError()
})

/*Should not give an error if correct input is passed*/
it('Should return error if no parameter is passed', () => {
    //Arrange
    const input = 'abc'

    //Act
    const result = () => {
        validateStringNotEmpty(input)
    }

    //Assert
    expect(result).not.toThrow()
})

/*Should give an error if anything other than number is passed*/
it('Should return error if no parameter is passed', () => {
    //Arrange
    const input = 'abc'

    //Act
    const result = () => {
        validateNumber(input)
    }

    //Assert
    expect(result).toThrow()
})
})

describe('validateNumber()', () => {
/*Should not give an error if number is passed*/
it('Should not give an error if number is passed', () => {
    //Arrange
    const input = 2

    //Act
    const result = () => {
        validateNumber(input)
    }

    //Assert
    expect(result).not.toThrow()
})

/*Should give an error if empty string or undefined and null is passed*/
it('Should give an error if empty string is passed', () => {
    //Arrange
    const input1 = undefined
    const input2 = null
    const input3 = ''

    //Act
    const result1 = () => {
        validateNumber(input1)
    }

    const result2 = () => {
        validateNumber(input2)
    }

    const result3 = () => {
        validateNumber(input3)
    }

    //Assert
    expect(result1).toThrow()
    expect(result2).toThrow()
    expect(result3).toThrow()
})
})




