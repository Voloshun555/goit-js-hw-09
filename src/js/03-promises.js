import Notiflix from 'notiflix';

const revs = {
  forma: document.querySelector('.form'),
  delayForm: document.querySelector('[name="delay"]'),
  stepDelayForm: document.querySelector('[name="step"]'),
  amountForm: document.querySelector('[name="amount"]'),
  btn: document.querySelector('[type="submit"]'),
};

revs.forma.addEventListener('submit', onFormSubmit);

 function onFormSubmit(evt) {
   evt.preventDefault();
   let delayPromise = Number(revs.delayForm.value);

   for (let i = 1; i <= revs.amountForm.value; i += 1) {
     createPromise(i, delayPromise).then(onSuccess).catch(onError);
     delayPromise += Number(revs.stepDelayForm.value);
   }
 }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
};

 function onSuccess(result) {
   Notiflix.Notify.success(result);
 }

 function onError(error) {
   Notiflix.Notify.failure(error);
 }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// =======================================================================================================================================================================================
