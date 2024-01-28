var t=document.querySelector(".slider__range"),r=document.querySelector(".slider__wrapper");t.addEventListener("input",e=>{r.style.setProperty("--position",`${e.target.value}%`)});
