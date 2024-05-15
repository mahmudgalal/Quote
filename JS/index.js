var qoute = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
];
var author = [
  "Oscar Wilde",
  "Marilyn Monroe",
  " Frank Zappa",
  "Albert Einstein",
  "Marcus Tullius Cicero",
  "Bernard M. Baruch",
  "William W. Purkey",
  "Dr. Seuss",
  "Mae West",
  "Mahatma Gandhi",
];

var text = document.getElementById("text");

var num;
document.getElementById("btn").onclick = function nextQoute() {
  var i = Math.trunc(Math.random() * qoute.length);
  if (i === num) {
    i = i + 1;
    text.innerHTML = ` <h1 class="fs-1 mb-3">${qoute[i]}</h1>
        <span class="text-secondary fs-5 mb-5">${author[i]}</span>`;
    num = i;
  } else {
    text.innerHTML = ` <h1 class="fs-1 mb-3">
        ${qoute[i]}
        </h1>
        <span class="text-secondary fs-5 mb-5">${author[i]}</span>`;
    num = i;
  }
};
