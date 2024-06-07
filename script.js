document.getElementById("luck-button").addEventListener("click", function () {
  alert("Good luck! AI is here to assist you.");
});


// Generate animated lottery balls
// const numBalls = 50;
// const container = document.querySelector(".lottery-balls");

// for (let i = 0; i < numBalls; i++) {
//   const ball = document.createElement("div");
//   const size = Math.random() * 20 + 10; // random size between 10 and 30
//   ball.style.width = `${size}px`;
//   ball.style.height = `${size}px`;
//   ball.style.left = `${Math.random() * 100}vw`;
//   ball.style.animationDuration = `${Math.random() * 5 + 5}s`; // random duration between 5 and 10 seconds
//   ball.style.animationDelay = `${Math.random() * 10}s`; // random delay up to 10 seconds
//   container.appendChild(ball);
// }

const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Is artificial intelligence less than our intelligence?";
  }, 0);
  setTimeout(() => {
    text.textContent = "Believe you can and you're halfway there.";
  }, 4000);
  setTimeout(() => {
    text.textContent =
      "Artificial intelligence is the future, and the future is here.";
  }, 8000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 12000);

let button = document.getElementById('button');
button.addEventListener('click',function(){
  for(let i=0; i < 50; i++){
    let spark = document.createElement('i');
    spark.classList.add('spark');
    document.body.appendChild(spark);

    // remove the spark elements after 2 sec
    setTimeout(function(){
      spark.remove();
    },2000);
  }
})

