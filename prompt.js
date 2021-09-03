const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); //isNaN : 값이 String 이면 true를, String이 아니면 false를 반환한다.

if(isNaN(age) || age <= 0) {
    console.log("Please write a real age");
} else if(age < 20){
    console.log("Thank you for writing your age. you are not adult");
} else {
    console.log("Thank you for writing your age. you are adult");
}