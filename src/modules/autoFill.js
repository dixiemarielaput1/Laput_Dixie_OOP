export function autoFill() {
    const sampleData = {
        weight: 70,
        waist: 32,
        height: 175,
        chest: 40,
        hips: 38,
        neck: 15,
        inseam: 30
    };

    document.querySelector('#weight').value = sampleData.weight;
    document.querySelector('#waist').value = sampleData.waist;
    document.querySelector('#height').value = sampleData.height;
    document.querySelector('#chest').value = sampleData.chest;
    document.querySelector('#hips').value = sampleData.hips;
    document.querySelector('#neck').value = sampleData.neck;
    document.querySelector('#inseam').value = sampleData.inseam;

    document.querySelector('#size-form').dispatchEvent(new Event('submit'));
}
