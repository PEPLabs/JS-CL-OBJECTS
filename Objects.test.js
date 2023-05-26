
/**
 * @jest-environment jsdom
 */
const {user, returnUserObject} = require('./Objects.js')


test ('find array length', () =>{
    expect(returnUserObject("test", "test")).toEqual({username: "test", password: "test"})
})
