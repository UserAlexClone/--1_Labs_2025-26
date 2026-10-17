//7
const fn = () => {
let n_obj = {name: "Олександр"};
let m_obj = {name: "Артем"};
let stor_obj = {surname:"Філіп"};

const a = n_obj;
let b = m_obj;

console.log(a, b);

a.name = ("Роман");
b.name = ("Михайло");

console.log(a, b);

//a = stor_obj; //TypeError: Assignment to constant variable.
b = stor_obj;

console.log(a, b);
};
