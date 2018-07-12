function random(){
    let endNumber = process.argv[2]
    let randomNumber = Math.random()
    randomNumber = randomNumber * endNumber
    randomNumber = Math.floor(randomNumber)
    console.log(randomNumber)
}
random()
console.log()

function randomLetter(){
    let string = process.argv[3]
    let randStringLetter = Math.random()
    randStringLetter = randStringLetter * string.length
    randStringLetter = Math.floor(randStringLetter)
    console.log(string[randStringLetter])
}
randomLetter()
console.log()

function myGuy(){
    let myGuyString = process.argv[4]
    console.log(myGuyString+", my guy")
}
myGuy()
console.log()

function string_N_Times(){
    let inputString = process.argv[5]
}