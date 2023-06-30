// Text randomizer effect
function hackText(text, object, speed) {
        let iterations = 0;
        let originalInput = text;
        // randomizes the paragraph
        const interval = setInterval(() => {
    
            //  gets the paragraph and splits it into an array
            object.innerHTML = text.split("")
    
            //  make a new array
            .map((letter, index) => {
     
                //  if the iterations is higher than the letter id in the array, return the original letter
                if (index < iterations) {
                    return originalInput[index];
                }
                //  otherwise return a random letter
                return letters[Math.floor(Math.random() * 26)];
            })
    
            //  turns the new array into a string
            .join("");
    
    
            //  if the randomizor has run 10 times, stop it
            if (iterations >= originalInput.length)  {
                clearInterval(interval);
            }
            // how many random numbers before going back to original letter?
            iterations += 1 / speed;
        }, 30);
}