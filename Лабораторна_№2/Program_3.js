//6
const average = (a, b, x) => {
    x = (a + b)/2;
    return(x);
};

const square = (sq, y) => {
    y = sq**2;
    return(y);
};

const cube = (cu, z) => {
    z = cu**3;
    return(z);
};

const calculate = (d) => {
    i = 0;
    list = [];
    while (i >= 0 && i <= 9) {
        d = average(square(i), cube(i));
        list.push(d);
        i += 1;
    };
    console.log(list);
};

calculate(0);
