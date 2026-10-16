const list = [false, "goodbye", -2, 50, 2.25, true, true, null, NaN, "CakeIsALie"];
const hash = {};

for (i of list) {
    console.log(typeof i)
    if (typeof i == "boolean") {
        if (hash.boolean != undefined) {
            hash.boolean += 1;
        }
        else {
            hash.boolean = 1;
        };
    }
    
    else if (typeof i == "string") {
        if (hash.string != undefined) {
            hash.string += 1;
        }
        else {
            hash.string = 1;
        };
    }

    else if (typeof i == "number") {
        if (hash.number != undefined) {
            hash.number += 1;
        }
        else {
            hash.number = 1;
        };
    }

    if (typeof i == "object") {
        if (hash.null != undefined) {
            hash.null += 1;
        }
        else {
            hash.null = 1;
        };
    };
};

console.log(hash.boolean, hash.string, hash.number, hash.null);