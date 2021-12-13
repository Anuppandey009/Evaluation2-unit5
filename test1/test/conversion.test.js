
var conversion=require("../conversion.js")
var conversion1=require("../conversion1.js")

describe("Conversion of units",function(){
    test("In should convert byte  to kb",function(){
        expect(conversion(1000)).toBe(1)
    });


    test("In should convert kb to mb",function(){
        expect(conversion1(1000)).toBe(1)
    });
})