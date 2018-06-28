const minInp = document.querySelector('#min');
const maxInp = document.querySelector('#max');
const submit = document.querySelector('form');
const result = document.querySelector('#result span');

submit.addEventListener('submit', event => {
  event.preventDefault();

  const min = minInp.value;
  const max = maxInp.value;

  if (min && max) {
    fetch(`/random/${min}/${max}`)
      .then(v => v.json())
      .then(data => {
        result.textContent = data.result;
      })
      .catch(e => {
        result.textContent = e;
      });
  }
});
