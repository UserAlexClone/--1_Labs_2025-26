//3
const iface = {
    pr1: "name",
    pr2: function func(a, b) {
        return[a, b];

    },
    pr3: k => [k],
    pr4: 23,
    pr5(x, y, z) {
        return[x, y, z];
    }
};

const list = [];

for (const i in iface) {
    
    if (typeof iface[i] == "function") {
        let b = iface[i].length;
        list.push([i, b]);
    };
};
console.log(list);
