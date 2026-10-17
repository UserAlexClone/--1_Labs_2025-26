//1
const random = (max, min) => {
    if (min == undefined) {
        let f = Math.random();
        let d = f*10**max.toString().length
        if (0 <= Math.floor(d) && Math.floor(d) <= max) {
            let a = Math.floor(d);
            console.log(a);
        }
        else {
            random(max, 0);
        };
    }
    
    else {
        let f = Math.random();
        let d = f*10**max.toString().length
        if (min <= Math.floor(d) && Math.floor(d) <= max) {
            // console.log("Спрацьовує if");
            let a = Math.floor(d);
            console.log(a);
        }
        else {
            random(min, max);
        };
    };
};

random(50, 111);
random(111);
