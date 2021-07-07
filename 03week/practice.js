let foodInfo = (answer) => {
    answer.toLowerCase().trim()
    if (answer === 'banana' || answer === 'apple'){
        console.log("delicious!")
    }else {
        console.log("disgusting, go away")
    }
    console.log(answer)
}

module.exports = foodInfo
