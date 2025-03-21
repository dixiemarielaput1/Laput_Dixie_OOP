import Person from './person.js';

class EstimatedSize extends Person {
    constructor(weight, waist, height, chest, hips, neck, inseam) {
        super(weight, waist, height);  
        this.chest = chest;
        this.hips = hips;
        this.neck = neck;
        this.inseam = inseam;
        this.bodyType = this.determineBodyType();
    }

 
    calculateSize() {
        const { waist, weight } = this;
        let size = '';
        if (waist < 32) {
             size = 'Small (S)';
        } else if (waist >= 32 && waist < 36) {
            size = 'Medium (M)';
        } else if (waist >= 36 && waist < 40) {
            size = 'Large (L)';
        } else if (waist >= 40 && waist < 44) {
            size = 'Extra Large (XL)';
        } else {
            size = '2XL (2 Extra Large)';
        }
        if (weight > 100) { 
            size = size === 'Small (S)' ? 'Medium (M)' : size;
            size = size === 'Medium (M)' ? 'Large (L)' : size;
            size = size === 'Large (L)' ? 'Extra Large (XL)' : size;
            size = size === 'Extra Large (XL)' ? '2XL (2 Extra Large)' : size;
        }
        return size;
    }

    displayBodyType() {
        return `Your body type is classified as: ${this.bodyType}.`;
    }
  
    additionalFeatures() {
        return `Your chest measurement is ${this.chest} inches, hips measurement is ${this.hips} inches, neck measurement is ${this.neck} inches, and inseam measurement is ${this.inseam} inches.`;
    }
}

export default EstimatedSize;
