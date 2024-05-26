import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = parseInt(form.querySelector('[name="delay"]').value);
  const state = form.querySelector('[name="state"]:checked').value;
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });
  promise.then(
    delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        title: 'Fulfilled promise',
        message: `Promise fulfilled in ${delay}ms`,
      });
    },
    delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        title: 'Rejected promise',
        message: `Promise rejected in ${delay}ms`,
      });
    }
  );
});
