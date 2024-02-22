   document.addEventListener('DOMContentLoaded', function () {
      const counterElement = document.getElementById('counter');
      const startButton = document.getElementById('startButton');
      const languageSelect = document.getElementById('languageSelect');
      let currentNumber;
      let endNumber;
      let selectedLanguage;

      function startCounter() {
        // Oculta el botón y el combobox al iniciar el contador
        startButton.style.display = 'none';
        languageSelect.style.display = 'none';

        // Define el rango del contador (por defecto inicia en 1 y termina en 10)
        currentNumber = 1;
        endNumber = 10;
        selectedLanguage = languageSelect.value;

        // Inicia el contador
        updateCounter();
      }

      function updateCounter() {
        counterElement.textContent = currentNumber;
        counterElement.style.opacity = 1;

        // Lee el número en el idioma seleccionado
        speakNumber(currentNumber, selectedLanguage);

        setTimeout(function () {
          counterElement.style.opacity = 0;
        }, 1000); // Fade out after 1 second

        setTimeout(function () {
          currentNumber++;
          if (currentNumber <= endNumber) {
            updateCounter();
          } else {
            // Cuando se alcanza el endNumber, oculta los números, el botón y el combobox
            counterElement.style.display = 'none';
            startButton.style.display = 'block';
            languageSelect.style.display = 'block';
          }
        }, 2000); // Change number after 2 seconds
      }

      function speakNumber(number, language) {
        const utterance = new SpeechSynthesisUtterance(number.toString());
        utterance.lang = language;
        speechSynthesis.speak(utterance);
      }

      // Asigna la función startCounter al evento clic del botón
      startButton.addEventListener('click', startCounter);
    });

    function changeLanguage() {
      // Cambia el idioma seleccionado al modificar el combobox
      selectedLanguage = document.getElementById('languageSelect').value;
    }