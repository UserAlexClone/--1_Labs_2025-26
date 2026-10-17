const a = 20;

const inc = (n) => {
    n += 1;
    return(n);
};

const b = inc(a);
console.dir({a, b});



const object = { x: 9 };

const increment = (Num) => {
    Num.x += 1;
};

increment(object);
console.dir(object);
