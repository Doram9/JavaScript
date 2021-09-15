const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; //폴더에 있는 이미지의 이름들을 배열로 저장
const chosenImage = images[Math.floor(Math.random() * images.length)]; //배열의 요소중 하나를 랜덤으로 저장
const bgImage = document.querySelector("body"); // div태그를 추가하여 bgImage 변수에 저장
console.log(bgImage);
bgImage.style.backgroundImage = "url(" + `img/${chosenImage}` + ")"; //img태그의 src를 저장
