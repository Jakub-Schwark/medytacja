document.addEventListener('DOMContentLoaded', () => {
    // zdefiniuj potrzebne zmienne
    const timerDisplay = document.querySelector('.timer-display');
    const startButton = document.querySelector('#start-btn');
    let timerInterval;
    let timerTime = 0;
    const dzwonek = new Audio('dzwonek.mp3');
    const imnot = new Audio('imnot.mp3');
    const aaa = new Audio('aaa.mp3');
    const muzyka = new Audio('muzyka.mp3');

    zablokujWygazanieEkranu();

    // funkcja formatująca czas w formacie mm:ss
    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // funkcja uruchamiająca minutnik
    function startTimer() {
        timerInterval = setInterval(() => {
            timerTime++;
            timerDisplay.textContent = formatTime(timerTime);

            if (timerTime === 3) {
                        playSound(dzwonek); // wywołanie funkcji odtwarzającej dźwięk
            }
            if (timerTime === 5) {
                        playSound(imnot); // wywołanie funkcji odtwarzającej dźwięk
            }
            if (timerTime === 295) {
                        playSound(dzwonek); // wywołanie funkcji odtwarzającej dźwięk
            }
            if (timerTime === 300) {
                         playSound(aaa); // wywołanie funkcji odtwarzającej dźwięk
            }
            if (timerTime === 395) {
                         playSound(muzyka); // wywołanie funkcji odtwarzającej dźwięk
            }

        }, 1000);
    }

    function playSound(audio) {
        audio.play();
    }

    async function zablokujWygazanieEkranu() {
      try {
        const wakeLock = await navigator.wakeLock.request("screen");
        console.log("Wygaszanie ekranu zablokowane");
        wakeLock.addEventListener("release", () => {
          console.log("Wygaszanie ekranu odblokowane");
        });
      } catch (error) {
        console.error(`Błąd przy blokowaniu wygaszania ekranu: ${error}`);
      }
    }

    // obsługa kliknięcia przycisku "Zaczynamy"
    startButton.addEventListener('click', () => {
        startTimer();
    });
    startButton.addEventListener('touchstart', () => {
        startTimer();
    });
});
