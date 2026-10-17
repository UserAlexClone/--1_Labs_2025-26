//2
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {

    const b = characters.split("");
    let a = length;
    let o = "";
  while (a != 0) {
    a -= 1;
    

    function random() {
        let f = Math.random()*100;
        let d = Math.floor(f);
        if (0 < d && d <= 36) {
            let m = d-1;
            let el = b[m];
            o += el;

        }

        else {
            random();
        };
    };

    random();

  };
  console.log(o);
};

generateKey(10, characters);
