function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function chengeColor () {
    const color = getRandomHexColor();
    document.body.style.background = color;
  };

  let intervall = true;
  
  const btnStart = document.querySelector('[data-start]');
  const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', chengeColorStart );
btnStop.addEventListener('click', chengeColorStop);



  function chengeColorStart () {
    intervall = setInterval(chengeColor, 1000);
    btnStart.disabled = true;
    if (btnStart.disabled) {
        btnStop.disabled = false;
    };
  };
  function chengeColorStop () {
    clearInterval(intervall);
    btnStop.disabled = true;
    if (btnStop.disabled) {
        btnStart.disabled = false;
    }
  };


