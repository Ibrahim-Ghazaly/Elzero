
//incraesing progress on scrolling
//increasing counter when scrolling
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progres span");
let nums = document.querySelectorAll(".box .number");
let stats = document.querySelector(".stats");
let started = false; // Function Started ? No


let arrow =document.querySelector(".go-up");

window.onscroll = function () {

  if (window.scrollY >= section.offsetTop) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }


  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if(window.scrollY >= 1000){
    
      arrow.classList.add("show")  
    }else{
      arrow.classList.remove("show");
    }
    
  }

  arrow.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}




