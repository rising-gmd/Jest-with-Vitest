import { describe, expect, it } from "vitest"
import { generateToken, generateTokenPromise } from "./jwtToken"

// describe('generateToken', () => {

//     // it('Should return token on valid data', () => {
//     //     const email = 'testtest.com'

//     //     generateToken(email, (err, token) => {
//     //         expect(token).toBe(2);
//     //     })

//     // })

//     /* The above test will always pass on all the inputs and that is because in case of callbacks, vitest/jest will just run generate token
//     and not the callback function and it means that no assertion is checked and that is why our test will always pass  */

//     /* So in order to execute this, we need to pass a done() function so that jest waits until the done callback is called before
//     finishing the test  */

// })

describe('generateToken', () => {

    it('Should return token on valid data', done => {
        const email = 'test@test.com'

        generateToken(email, (err, token) => {
            if (err) {
                done (err)
            }

            /* Using try catch so that output can be catched otherwise it will not be able to catch error in this case  */

            try {
                expect(token).toBeDefined()
                done()

            } catch (error) {
                done(error)  
            }

        })

    })

})

describe('generateTokenPromise', () => {

    it('Should return token if promise using await pattern is resolved', async () => {
        const email = 'test@test.com'

        const token = await generateTokenPromise(email)

        expect(token).toBeDefined()
    })

    it('Should return token if promise using (resolves) pattern is resolved', () => {
        const email = 'test@test.com'
        return expect(generateTokenPromise(email)).resolves.toBeDefined()
    })
    
})


