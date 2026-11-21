//1, 2, 3, 4, 5

const sum = (...args) => {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    for (let i = 0; i < args.length; i++) {
        sum1 += args[i];
    };

    
    for (let i of args) {
        sum2 += i;
    };


    let counter1 = 0;
    while (counter1 != args.length) {
        sum3 += args[counter1];
        counter1 += 1;
    };


    if (args.length == 0){
        sum4 += 0;
    }

    else{
        let counter2 = 0;
        do {
            sum4 += args[counter2];
            counter2 += 1;
        } while (counter2 != args.length);
    };


    sum5 = args.reduce((Sum, i) => Sum += i, 0);
    
    console.log(sum1, " ", sum2, " ", sum3, " ", sum4, " ", sum5);
};

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
