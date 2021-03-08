let s1 = 'writetoyourparents'
let s2 = 'fghmqzldbc'

let encontrou = "";
let tamS1 = s1.length;
let tamS2 = s2.length;


for (let i = 0; i < tamS1;i++){
    for (let j = 0; j < tamS2;j++){
        if (s1[i] == s2[j]){           
            return encontrou = "YES";
        }
    }
}
if (encontrou == false){
    return encontrou = "NO";
}
