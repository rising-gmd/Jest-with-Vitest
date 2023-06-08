import { it, expect, describe, beforeEach, beforeAll } from 'vitest';
import { User } from './hooks';

/* Global variables */
const email = 'gmd2171@gmail.com'
let user;

/* Before each test suite */
beforeAll(() => {
  user = new User(email)
})

describe('user', () => {

  it('Should add the new user', () => {
    expect(user.email).toBe(email)
  })

  it('Should tell that user have an email property', () => {
    expect(user).toHaveProperty('email')
  })

})

describe('updateEmail', () => {

  it('Should update the email of the user', () => {
    const newEmail = 'gmd2171@gmail.com'

    user.updateEmail(newEmail)

    expect(user.email).toBe(newEmail)
  })

})

describe('clearEmail', () => {

  it('Should clear the email if it is cleared', () => {
    user.clearEmail()
  
    expect(user.email).toBe('')
  })

  it('Should still have an email property after it is cleared', () => {
    user.clearEmail()
  
    expect(user).toHaveProperty('email')
  })

})

/* Adding annontation .concurrent after it will boost up the tests  for huge amounts of tests */

/* Even when not adding the .concurrent property / annotation, tests that are stored in different files are executed concurrently 
(i.e., in parallel). This is done by both Vitest and Jest - ensuring that your tests run in a short amount of time. With .concurrent 
you can enforce this behavior also inside the individual files (i.e., tests that live in one and the same file are executed 
concurrently). Concurrent execution can reduce the amount of time your tests need to execute. A downside of concurrent execution 
is, that tests that perform clashing (global) state manipulations may interfere with each other */