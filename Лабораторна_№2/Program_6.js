//9

const dtBase = [
    MA = {name: "Marcus Aurelius", phone: "+380445554433",},
    MZ = {name: "Mao Zedong", phone: "+380134969445",},
    RD = {name: "Rene Descartes", phone: "+380777891283",},
];

const findPhoneByName = (name) => {
    for (let n = 0; n < dtBase.length; n++) {
        if (name == MA.name) {
            console.log(MA.phone);
            return(MA.phone);
        }

        else if (name == MZ.name) {
            console.log(MZ.phone);
            return(MA.phone);
        }

        else if (name == RD.name) {
            console.log(RD.phone);
            return(MA.phone);
        }

        else {
            console.log("Користувач з цим іменем не має номера.")
            return(null);
        };
    };
};

findPhoneByName("Mao Zedong");
// findPhoneByName("Rene Descartes");
findPhoneByName("Marcus Zedong");
