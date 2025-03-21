
class Person {
    constructor(weight, waist, height, chest, hips, neck, inseam) {
        this.weight = weight;    
        this.waist = waist;     
        this.height = height;    
        this.chest = chest;     
        this.hips = hips;       
        this.neck = neck;        
        this.inseam = inseam;   
        this.bodyType = this.determineBodyType();
    }

    determineBodyType() {
        if (this.waist < 30) {
            return 'Slim';
        } else if (this.waist >= 30 && this.waist <= 34) {
            return 'Average';
        } else if (this.waist >= 35 && this.waist <= 38) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }

    getHeightCategory() {
        if (this.height < 160) {
            return 'Short';
        } else if (this.height >= 160 && this.height <= 180) {
            return 'Average Height';
        } else {
            return 'Tall';
        }
    }

    getFitCategory() {
        if (this.chest > 40 && this.hips > 40) {
            return 'Athletic';
        } else if (this.chest < 38 && this.hips < 38) {
            return 'Slim Fit';
        } else {
            return 'Regular Fit';
        }
    }
}

export default Person;
