
var inp=200000



function time(inp){
    var sec=Math.floor(inp/1000)

    var min=Math.floor(sec/60)
    var rem=sec%60
    sec=rem
    
//  return  [min,sec]
return (`${min} : ${sec}`)
 
}

module.exports=time
