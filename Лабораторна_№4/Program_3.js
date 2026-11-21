//7

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (obj) => {
  let info = {};
  let count = 0;
  
  for (let key in obj) {
      let a = Object.keys(obj)[count];
      info[a] = obj[key].died - obj[key].born;
      count += 1;
  };

  return info;
};

console.log(ages(persons));
