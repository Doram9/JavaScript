const a = 5; //const는 상수 라는 뜻으로 값이 변하지않는다.
const myName = "nico";
let b = 2; //let은 이후에 값변경 가능
var c = 1;
var c = 2; //var는 동일한 변수명을 중복으로 선언해도 에러가 발생되지않는 오래된 기능이다. 되도록이면 let과 const를 사용하자.
console.log(b);
console.log("hello" + myName);
console.log(a + 2);
console.log(a * 2);
console.log(a / 2);

b = 1;
console.log(b);

const iamfat = true;
console.log(iamfat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const dayOfWeek = [mon, tue, wed, thu, fri, sat];
const nunsense = [1, 2, "hello", false, true, undefined, null];
console.log(nunsense);
dayOfWeek.push(sun); //배열 맨 끝에 요소 추가
console.log(dayOfWeek);

const playerName = "dohun";
const playerPoints = 121212;
const playerHandsome = false;
const playerStrong = "not good";

const player = { //오브젝트만들기
    name: "dohun",
    points: 121212,
    handsome: false,
    strong: "not good",
};

player.points = 10; //const로 선언한 오브젝트 안의 내용을 바꿀 수 있음.
player.speed = 72; //이런식으로 추가가능
console.log(player);

function sayHello(nameOfPerson) {
    console.log("Hello my name is " + nameOfPerson);
}
sayHello("dohun");

const age = 23
function calculateAge(age) { //함수에 return을 넣어 함수를 불러올때 그 함수의 return값이 출력되게끔 함.
    return age + 2;
}
console.log(calculateAge(age));