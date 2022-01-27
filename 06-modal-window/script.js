'use strict';

// querySelector selects only the first one
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // if we click the btn then we remove 'hidden' element
  btnsOpenModal[i].addEventListener('click', openModal);
}

// add elements on X button click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// calls when we hit esc key
document.addEventListener('keydown', function (event) {
  // if modal does not contain hidden class, close the modal
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
