const fs = require('fs')
const content = 'Logging to a file'
fs.writeFile('test.txt', content, err => {
    if (err) {
        throw err
    }
    console.log('first it will print')
})
console.log('second it will print')
