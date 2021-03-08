let d = 4;
let a = [1, 2, 3, 4, 5]


for (let i =0; i < d; i++){
    a.push(a[0])
    a.splice( 0,1);

} 



console.log(a)