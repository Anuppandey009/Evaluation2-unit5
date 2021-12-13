
const time= require("./time.js")    

describe("The Time should be displayed in the minutes and second format",()=>{
    test("The given time is ",()=>{
   expect(time(200000)).toBe(`${3} : ${20}`)
    })
})