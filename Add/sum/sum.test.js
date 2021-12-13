
const num=require("./sum")

describe("multiply of  test cases",()=>{
    test("multiplication of 2,3 should be 5",()=>{
        expect(num(2,3)).toEqual(5)
    })
})