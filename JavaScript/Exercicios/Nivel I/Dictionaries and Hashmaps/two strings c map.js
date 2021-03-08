let s1 = 'hello'
let s2 = 'world'


let index;
let check = new Map();


for (let letter of s1){
 
  if (check.has(letter)){

    check.set(letter, check.get(letter) + 1)

  }else{
    check.set(letter, 1)
  }
 
}
console.log(check)

for (let i = 0; i < s2.length; i++){

  if (check.has(s2[i])){
    return "YES";
  }
    
}

return "NO"
