//4, 5
const range = (start, end) => {
    i = start
    const array = [];
    while (i >= start && i <= end) {
        array.push(i);
        i += 1;
    };
    console.log(array);
};

range(15, 30);



const rangeOdd = (start, end) => {
    i = start
    const array = [];
    while (i >= start && i <= end) {
        if (i%2 != 0) {
        array.push(i);
        };
        i += 1;
    };
    console.log(array);
};

rangeOdd(15, 30);
