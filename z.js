let word = ["gaa", "asuu", "s", "u","", "", "suak"]
const fs = require("fs");
let badword = JSON.parse(fs.readFileSync("./badword.json", "utf8"));



function typoword(x){
  x[x.length -1] == x[x.length -2] ? x = x.substring(0,x.length -1) : x
  if(x[x.length -1] == x[x.length -2]){
    typoword(x)
  }else{
    return x
  }
}

text = ''
console.log(word.slice(0,word.length))
  word.forEach(y=> {
    try {
      y = typoword(y)
    }catch{
      y
    }

    if (badword[y]){
      text += `${badword[y]} `
    }else{
      text+= `${y} `
    }
  })
