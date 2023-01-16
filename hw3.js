let user={};
let name=prompt("Укажите ваше имя");
let age=prompt("Укажите ваш возраст");
let female=confirm("Вы мужчина?");
if (female==true) {
    female="мужчина";
} else{
    female="женщина";
}

user.name=name;
user.age=age;
user.female=female;
console.log(user);

let number=prompt("Введите число")
if (number>10){
    alert(number);
}

let a=+prompt('a?','');
console.log(a);
a=+a;
console.log(a);

switch (a){
    case 0: alert("0"); break;
    case 1: alert("1"); break;
    case 2: 
    case 3: alert("2,3"); break;
    default: alert("что-то другое")
}

let sum=0;

for (let i=1;i<=100;i++){
    if (i%2==0){
        sum+=i;
    }
   
}

console.log(sum);

let i=100;
let sum2=0
while (i>=0){
    if (i%2==0){
        sum2+=i;
    }
    i--;
}

console.log(sum2);
