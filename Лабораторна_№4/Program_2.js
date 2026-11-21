//6

const max = (array) => {
    let maxNum = array[0][0];

    for (let i = 0; i < array.length; i++) {
        let line = array[i];

        for (let j = 0; j < line.length; j++) {
            let collumn = line[j];

            if (maxNum < collumn) {
                maxNum = collumn;
            };
        };
    };
    
    return maxNum;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
