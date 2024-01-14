// Gets a random number 
const randomNumber = num => {
    Math.floor(Math.random() * num)
};

// Inspiration Objects
const inspiration = {
    date: Date(),
    specialMessage: ["Do what you can, with what you have, where you are", "A person who never made a mistake never tried anything new", "Never regret anything that made you smile", "You must do the thing you think you cannot do"],
    advice: ["Follow your passion", "Never stop learning.", "Focus on what you can control.", "There's more than one way of doing something."]
}
console.log(inspiration);