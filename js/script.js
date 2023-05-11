
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


// generate random string
function generateKey() {
    let result = '';
    let randomNumber = getRandom(0, characters.length - 1);

    for (let i = 0; i < randomNumber; i++) {
        result += characters[getRandom(0, characters.length - 1)];
    };

    return result;
}

// random number 
function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));   
}

////////////////
console.log(generateKey());
////////////////

document.write(`
    <div class = 'wrapper'>
        <p>${generateKey()}</p>
    </div>
`);

