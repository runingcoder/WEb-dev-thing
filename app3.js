// local reviews data
const reviews = [
  {
    id: 1,
    name: "Suprim Sharma",
    job: "Free walker",
    img:
      "./suprim.jpg",
    text:
      "Life is not fundamentally a ready made  thing It's an empty canvas where u add all the colours and meaning. There is nothing to do and nowhere to go. U add things up and start the chase and get along on that race",
  },
  {
    id: 2,
    name: "PKC",
    job: "Osho Pena",
    img:
      "./pkc.jpg",
    text:
      "I AM NOT DESTINED TO BE THE GREATEST OF ALL TIME. BUT I KNOW I CAN BE IT WITH HARD WORK. ESPECIALLY THIS,I AM NOT DESTINED OR ALLOWED BY THE UNIVERSE TO BE THE KING OF THE WORLD. BUT I CAN BE IT !!!",
  },
  {
    id: 3,
    name: "Divyaswor",
    job: "Software developer",
    img:
      "./dips.jpg",
    text:
      "“If you are smart enough, you will find what to do”.",
  },
  {
    id: 4,
    name: "Popsicle",
    job: "Singing Yogic",
    img:
        "./popp.jpg",
    text:
      "I'mma be a Goddess.",
  },

  {
    id: 5,
    name: "Breather",
    job: "The typer",
    img:
        "./meeee.jpg",
    text:
      "Alright,, its random but do watch the movie Dead Poet's Society, if you haven't hai. Its a nice one",
  },
  {
    id: 6,
    name: "Aastha Pandey",
    job: "Tracy McConnell doppleganger",
    img:
      "./pande.jpg",
    text:
      "I want a gay child",
  },{
  id: 7,
  name: "Ashish Khatako",
  job: "Manga ASMRist  ",
  img:
    "./khata.jpg",
  text:
    "Aba, aaja dekhi herxu Django ma.",
},
{
id: 8,
name: "Skein Neupane",
job: "Engineering Analyst  ",
img:
  "./ske.jpg",
text:
  "Poch and PSG are serial bottlers",
},
{
  id: 9,
  name: "Nagatoro",
  job: "Senpai Teaser",
  img:
      "./person-1.jpeg",
  text:
    "Senpai, I will model for you.",
},
{
  id: 10,
  name: "Rajay Bajracharya",
  job: "Graphic designer",
  img:
      "./baj.jpg",
  text:
    "Oof, 2 ghanta basketball khelera ta ekdum fresh vaye. Aba, freelance continue garnu paryo. Oof",
},
{
  id: 11,
  name: "Abinash Acharya",
  job: "Best adviser",
  img:
      "./abi.jpg",
  text:
    "La k la, tmi ekdum hansy chau k bro,tmro stamina dekhera kti haru rolan.",
}
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// set starting items
let currentItem = 0;

// load initail item
window.addEventListener("DOMContentLoaded", function(){

  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});





//show person based on item

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent =item.name;
  job.textContent =item.job;
  info.textContent =item.text;
}
//show nex preson

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem=0;
  }
  showPerson(currentItem)
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
