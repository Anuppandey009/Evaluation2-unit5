
const num=require("./multiply")

describe("multiply of  test cases",()=>{
    test("multiplication of 2,3 should be 6",()=>{
        expect(num(2,3)).toEqual(6)
    })
})