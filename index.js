//Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }

  (age > 18) ? alert(true) : confirm('Родители разрешили?');
}

//Функция pow(x,n)
function pow(x, n){
  let res = 1;
  for(let num = 0; num < n; num++){
    res = res * x;
  }
  console.log(res);
}

pow(2, 2);
pow(2, 4);
pow(4, 6);



//Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
let newArr = [];

function sortReverse(){
  const res = arr.sort((a,b) => {return a-b});
  console.log(res.reverse());
}

sortReverse(); // 8, 5, 2, 1, -10

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let res = [];
let names = users.map((names) => res.push(names.name));

console.log( res ); // Вася, Петя, Маша

//Трансформировать в объекты
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let fullNameArr = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

let usersMapped = users1.map((user) => {
  fullNameArr.push(user.id, `${user.name} ${user.surname}`);
})

console.log(fullNameArr) // Вася Пупкин

//Получить средний возраст
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];

function getAverageAge(arr2){
  let sum = 0;
  let count = 1;
  const res = arr2.map((age) => {
    sum += age.age;
    count++;
    console.log((sum) / count)
  })
}

getAverageAge(arr2); // (25 + 30 + 29) / 3 = 28