import { handleFormSubmit } from '../modules/formHandler.js';
import { autoFill } from '../modules/autoFill.js';
import { gsapAnimations } from '../modules/gsapAnimations.js';

document.querySelector('#size-form').addEventListener('submit', handleFormSubmit);
document.querySelector('#auto-fill').addEventListener('click', autoFill);

gsapAnimations();