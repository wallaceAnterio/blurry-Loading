const textLoading = document.querySelector('.text-loading')
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int);
    }

    textLoading.innerText = `${load}%`;
    textLoading.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/** Reference Link
 * https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, int_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (int_max - in_min) + out_min;
};