const Dark = () => {
  
    var element = document.body;
    element.classList.toggle("darkBG");
  }
  
  const moonButton = document.getElementById("moonBtn");
  moonButton.onclick = function(){Dark()};

  
  const Light = () => {
  
    var element = document.body;
    element.classList.toggle("lightBG");
  }

  const sunButton = document.getElementById("sunBtn");
  sunButton.onclick = function(){Light()};