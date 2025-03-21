import EstimatedSize from '../modules/estimatedSize.js';

export function handleFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(document.querySelector('#weight').value);
    const waist = parseFloat(document.querySelector('#waist').value);
    const height = parseFloat(document.querySelector('#height').value);
    const chest = parseFloat(document.querySelector('#chest').value);
    const hips = parseFloat(document.querySelector('#hips').value);
    const neck = parseFloat(document.querySelector('#neck').value);
    const inseam = parseFloat(document.querySelector('#inseam').value);

    const sizeEstimator = new EstimatedSize(weight, waist, height, chest, hips, neck, inseam);

    const size = sizeEstimator.calculateSize();
    document.querySelector('#size-result').textContent = `Your estimated size is: ${size}`;

    const additionalFeatures = sizeEstimator.additionalFeatures();
    document.querySelector('#additional-features').textContent = additionalFeatures;

    const bodyType = sizeEstimator.displayBodyType();
    document.querySelector('.body-form').textContent = bodyType;
}
