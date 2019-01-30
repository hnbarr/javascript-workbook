let foodInfo = require('./practice.js')
let readline = require ('readline')
let cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

cli.question("What fruit do you like?", (answer) => {
    foodInfo(answer)
    cli.close()
})