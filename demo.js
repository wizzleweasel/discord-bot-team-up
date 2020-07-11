var hello = "Hello World";
String.prototype.replaceAt = function(index, replacement) {
  console.log(this.substr(0,index))
  console.log(replacement)
  console.log(this.substr(index + replacement.length))
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
console.log(hello.replaceAt(0, "*&#"))

String.prototype.filterword = function (filter){
  
  let re = new RegExp(filter.join('|'),"gi")
  let splitString = this.split(" ");
  console.log(re)
}


hello.filterword(["hello","gg"])


x = "<@!210834015165480970>"

console.log(x.substr(3,18))