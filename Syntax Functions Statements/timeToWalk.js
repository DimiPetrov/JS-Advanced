function solve(steps, footprint, speed) {
    const distance = steps * footprint;
    const breaks = Math.floor(distance / 500)* 60;
    const time = distance / (speed * 1000 / 3600) + breaks;

    const hours = Math.floor(time/60/60).toFixed(0).padStart(2, '0');
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, '0');
    const seconds = (time - hours * 3600 - minutes * 60).toFixed(0).padStart(2, '0');
     console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);