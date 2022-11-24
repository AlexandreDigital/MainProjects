const counter = document.querySelector('.calculator-number')

let count = 0

function changeCounter(para) {
    if (para == plus) {
        count += 1;
    } else if(para == minus){
        if (count <= 0) {
            count = 1;
        }
        count -= 1;
    } else if(para == reset){
        count = 0;
    }

    counter.innerHTML = count;
}