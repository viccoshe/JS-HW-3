// Task 1

let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}

let y = 35;

while (y >= 8) {
    console.log(y);
    y--;
}


// task 2

let d = 89;
while (d >= 11) {
    document.write(d + '</br>');
    d--;
}


// task 3

let a = 100,
    sum = 0;
for (let  n = 1; n <= a; n++) {
    sum += n;
}
console.log(sum);


// task 4

let h = 5,
    sum2 = 0;
for (l = 1; l <= h; l++) {
    sum2 = 0;
    for (let g = 1; g <= l; g++) {
        sum2 += g;
    }
    console.log('sum of ' + l + ' = ' + sum2)
}


// task 5

// for
{
 for (let p = 8; p <= 56; p++) {
    if(p % 2 != 0) continue;
    console.log(p);
}   
}

//while   

let p = 8;

do { 
    if(p % 2 == 0) console.log(p);
    p++;
} while (p <= 56) {
    
}


// task 6

let mult = 0;

for(let i = 2; i <= 10; i++) { 
    mult = 0;
    for(let j = 1; j <= 10; j++)   {
        mult = j * i;
        document.write(i + ' * ' + j + ' = ' + mult + '</br>'); 
    }
}


// task 7

let n = 1000,
    num = 0;

while(n >= 50){
    n /= 2;
    num++;
    if(n  < 50) break;
    console.log(n + ' number ' + num);
}


// task 8


let count = 0,
    avr = 0,
    sum3 = 0;
    
for (;;){
    let num = prompt('Введите число');

    if(isNaN(num)) {
        alert('это не число');
        continue;
    }

    if(num === '' || num == 0) break;

    sum3  += +num;
    count++;
}  

    avg = sum3 / count;
    console.log(sum3, avg);



// task 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)

// task 10

{
 let n = prompt('Введите число'),
count = 0;
sum = 0,
i = 0,
reverse = 0;

for ( ; i < n.length; i++){
sum += Number(n[i]);
reverse = Number(String(n).split('').reverse().join(''));
}

alert(n.split(''));
alert('Количество цифр - ' + i);
alert('Сумма цифр - ' + sum);
alert('В обратном порядке ' + reverse); 
   
}
