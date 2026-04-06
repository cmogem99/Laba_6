document.addEventListener("DOMContentLoaded", function(){

/* МОДАЛЬНОЕ ОКНО */

const modal = document.getElementById("welcomeModal");
const closeBtn = document.getElementById("closeModal");

closeBtn.onclick = function(){
modal.style.display = "none";
};


/* СЛАЙДЕР */

const images = [
"cat1.jpg",
"cat2.jpg",
"cat3.jpg"
];

let index = 0;

const img = document.getElementById("slideImage");

document.getElementById("nextSlide").onclick = function(){
index = (index + 1) % images.length;
img.src = images[index];
};

document.getElementById("prevSlide").onclick = function(){
index = (index - 1 + images.length) % images.length;
img.src = images[index];
};


/* ВИДЕО */

const video = document.getElementById("catVideo");
const btn = document.getElementById("playPauseBtn");

btn.onclick = function(){

if(video.paused){
video.play();
btn.textContent = "⏸ Пауза";
}else{
video.pause();
btn.textContent = "▶️ Воспроизвести";
}

};


/* ДИНАМИЧЕСКИЕ ПОЛЯ */

let fieldCount = 0;

document.getElementById("addFieldBtn").onclick = function(){

fieldCount++;

const container = document.getElementById("fieldsContainer");

const input = document.createElement("input");

input.type="text";
input.placeholder="Поле " + fieldCount;

container.appendChild(input);

};


/* ВАЛИДАЦИЯ ФОРМЫ */

document.getElementById("catForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("formMessage").textContent="Форма успешно отправлена!";
document.getElementById("formMessage").style.color="green";

});

});