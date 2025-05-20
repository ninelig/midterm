function countUp(target, duration, callback, complete) {
    const start = 0;
    const startTime = performance.now();
    const endTime = startTime + duration;
    
    function update() {
        const now = performance.now();
        const progress = Math.min(1, (now - startTime) / duration);
        const currentValue = Math.floor(progress * target);
        
        callback(currentValue);
        
        if (now < endTime) {
            requestAnimationFrame(update);
        } else {
            callback(target); // Ensure we end exactly at the target
            if (complete) complete();
        }
    }
    
    update();
}

document.addEventListener('DOMContentLoaded', () => {

const targetNumber = 24000;
const durationMs = 2000; // 2 seconds

const numberField = document.querySelector('.number');

countUp(
    targetNumber,
    durationMs,
    (currentValue) => {
        // This callback runs on each update
        console.log(currentValue);
        numberField.textContent = currentValue;
        // You could update a DOM element here:
        // document.getElementById('counter').textContent = currentValue;
    },
    () => {
        // This runs when the animation completes
        console.log('Animation complete!');
    }
);

});