
 import Notiflix from 'notiflix';

const revs = {
   forma: document.querySelector('.form'),
   delayForm: document.querySelector('[name="delay"]'),
   stepDelayForm: document.querySelector('[name="step"]'),
   amountForm: document.querySelector('[name="amount"]'),
   btn: document.querySelector('[type="submit"]'),
 };

 revs.forma.addEventListener('submit', onFormSubmit)

 function onFormSubmit(event) {
    event.preventDefault();
  let delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay).then(onSuccess).catch(onError)
delay += step
  }};

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    }

    reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }, delay)
  
})
  };

  function onSuccess(result) {
    Notiflix.Notify.success(result);
  }

  function onError(error) {
    Notiflix.Notify.failure(error);
  }

  
