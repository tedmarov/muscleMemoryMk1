console.log("Welcome to the main module. To access other parts, you need to mod the source.")

const favoriteBreed = (breedName) => {
    const sentence = `My favorite breed of dog is ${breedName}`

    return sentence
}

console.log(favoriteBreed("schnauzer"))