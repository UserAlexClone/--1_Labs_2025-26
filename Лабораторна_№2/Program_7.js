//10

const Key = [
    MA = {name: "Marcus Aurelius", phone: "+380445554433",},
    MZ = {name: "Mao Zedong", phone: "+380134969445",},
    RD = {name: "Rene Descartes", phone: "+380777891283",},
];

const findNameByPhone = (num) => {
    for (let n = 0; n < Key.length; n++) {
        if (num == MA.phone) {
            console.log(MA.name);
            return(MA.name);
        }

        else if (num == MZ.phone) {
            console.log(MZ.name);
            return(MA.name);
        }

        else if (num == RD.phone) {
            console.log(RD.name);
            return(MA.name);
        }

        else {
            console.log("За цим номером імені не знайдено.")
            return(null);
        };
    };
};

findNameByPhone("+380134969445");
// findPhoneByName("+380445554433");
findNameByPhone("+380000000000");
