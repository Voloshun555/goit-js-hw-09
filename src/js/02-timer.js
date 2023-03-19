import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const datePicker = document.querySelector('#datetime-picker');
const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

const startButton = document.querySelector('[data-start]');
let selectedDate = null;
startButton.disabled = true;

datePicker.addEventListener('click', dateCalendar);
startButton.addEventListener('click', startСountdown);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
                 Notiflix.Notify.failure(
                   'Please choose a date in the future',
                     {
                      timeout: 3000,
                     },
                   );
               } else {
                    startButton.disabled = false;
                    selectedDate = selectedDates[0];
                    console.log(selectedDate);
               };
           },
         };

function dateCalendar() {}
dateCalendar();

flatpickr(datePicker, options);

function startСountdown() {
    timer.start();
};
dateCalendar();

const timer = {
    isActive: false,
    intervalId: null,
    start() {
        if(this.isActive) {
            return;
        }
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        this.isActive = true;
        const deltaTime = convertMs(selectedDate - currentTime);
        console.log(deltaTime);
        updateClockFace(deltaTime);
        if (deltaTime.seconds <= 0) {
          this.stop();
        };
      }, 1000);
    },
    stop() {
      clearInterval(this.intervalId);
      this.isActive = false;
    }
  };

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

