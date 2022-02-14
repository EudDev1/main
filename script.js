const divMain = document.querySelector(".div-main");
const allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {

  li.addEventListener("click", e => {
    divMain.querySelector(".active-list").classList.remove("active-list");
    li.classList.add("active-list");

    const indicator = document.querySelector(".indicator")

    indicator.style.transform = `translateX(calc(${index * 90}px))`
  });

});
