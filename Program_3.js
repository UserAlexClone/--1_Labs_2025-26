const list = [false, "goodbye", -2, 50, 2.25, true, true, null, NaN, "CakeIsALie"];
const col = {boolean: 0, string: 0, number: 0, null: 0};

for (i of list) {
    console.log(typeof i)
    if (typeof i == "boolean") {
        col.boolean += 1;
    }
    
    else if (typeof i == "string") {
        col.string += 1;
    }

    else if (typeof i == "number") {
        col.number += 1;
    }

    else if (typeof i == "object") {
        console.log("null");
        col.null += 1;
    };
};

console.log(col.boolean, col.string, col.number, col.null);