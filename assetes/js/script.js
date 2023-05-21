var card1 = window.document.getElementById("card1");
var card2 = window.document.getElementById("card2");
var left = window.document.getElementById("left-arrow");
var right = window.document.getElementById("right-arrow");
var conteudo = window.document.getElementById("conteudo");
var timeoutId;

function direita(){
    card1.classList.remove("active");
    card2.classList.add("active");
    card1.style = 'opacity: 0; transition: opacity 0.5s ease-in-out;';
    card2.style = 'opacity: 1;';
    right.style = 'opacity: 0;';
    left.style = 'opacity: 1;';
    left.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        left.style.transform = 'translateX(-10px)';
        left.style.transition = 'transform 0.5s';
      });
      
      left.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(function() {
        left.style.transform = '';
        left.style.transition = '';
        }, 100);
      });
}

function esquerda(){
    card1.classList.add("active");
    card2.classList.remove("active");
    card1.style = 'opacity: 1;';
    card2.style = 'opacity: 0; transition: opacity 0.5s ease-in-out;';
    right.style = 'opacity: 1;';
    left.style = 'opacity: 0;';
}

var openmodal = window.document.getElementById("open-modal")
var modal1 = window.document.getElementById("mdl1");
var modal2 = window.document.getElementById("mdl2");


function openModal(){
    if (card1.classList.contains("active")) {
        modal1.classList.add("active");
        modal1.style.display = "flex";
        setTimeout(function() {
            conteudo.style = 'opacity: 0.1; transition: opacity 0.5s ease-in-out;';
            modal1.style.transition = "opacity 0.5s ease-in-out";
            modal1.style.opacity = "1";
        }, 100);
      }
      if (card2.classList.contains("active")) {
        modal2.classList.add("active");

        modal2.style.display = "flex";
        setTimeout(function() {
            conteudo.style = 'opacity: 0.1; transition: opacity 0.5s ease-in-out;';
            modal2.style.transition = "opacity 0.5s ease-in-out";
            modal2.style.opacity = "1";
        }, 100);
      }
}

function closeModal() {
    if (modal1.classList.contains("active")) {
      modal1.classList.remove("active");
      conteudo.style = 'opacity: 1; transition: opacity 0.5s ease-in-out;';
      modal1.style.transition = "opacity 0.5s ease-in-out";
      modal1.style.opacity = "0";
      setTimeout(function() {
        modal1.style.display = "none";
      }, 500);
    }
    if (modal2.classList.contains("active")) {
      modal2.classList.remove("active");
      conteudo.style = 'opacity: 1; transition: opacity 0.5s ease-in-out;';
      modal2.style.transition = "opacity 0.5s ease-in-out";
      modal2.style.opacity = "0";
      setTimeout(function() {
        modal2.style.display = "none";
      }, 500);
    }
}
