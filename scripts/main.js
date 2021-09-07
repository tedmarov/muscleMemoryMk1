console.log("Welcome to the main module. To access other parts, you need to mod the source.")

const favoriteBreed = (breedName) => {
    if (breedName==="schnauzer") 
        const sentence = `My favorite breed of dog is ${breedName}`
    else if (breedName==="meow")
        const sentence = "I like cats"
    return sentence
}

console.log('When it comes to pets, '&favoriteBreed("schnauzer"))