// Gets a random number 
const randomNumber = num => {
    Math.floor(Math.random() * num)
};

// Inspiration Objects
const inspiration = {
    date: Date(),
    specialMessage: ["Do what you can, with what you have, where you are", "A person who never made a mistake never tried anything new", "Never regret anything that made you smile", "You must do the thing you think you cannot do"],
    advice: ["Follow your passion", "Never stop learning.", "Focus on what you can control.", "There's more than one way of doing something."]
};

// Array to store your inspiration 
let yourInspo = []

// Object Iteration
for (let inspo in inspiration) {
    index = randomNumber(inspiration[inspo].length)

    switch(inspo) {
        case 'date':
            yourInspo.push(`Todays date is: ${this.date}}`);
        case 'specialMessage':
            yourInspo.push(`Your special message is: ${inspiration[inspo][index]}`);
        case 'advice':
            yourInspo.push(`Here is some adive, you got this: ${inspiration[inspo[index]]}`)
        default:
            console.log('Today is just not your day, but that is okay. There is always tomorrow');
    }
}


console.log(yourInspo);