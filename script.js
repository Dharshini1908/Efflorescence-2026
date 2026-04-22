window.onload = function(){

  const cards = document.querySelectorAll(".card");

  function showCards(){
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;

      if(top < trigger){
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showCards);
  showCards();
}