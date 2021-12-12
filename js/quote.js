const quote = document.querySelector('.quote');

const q = [
    "\"I wish I were a bird\"",
    "\"damn, she just like me fr fr\"",
    "\"Flock off feather-face\""
];

let num = Math.floor(Math.random() * 3);

quote.innerHTML = `${q[num]}`;
