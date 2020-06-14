const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const roman = req.query.roman
    
    if (roman === undefined) {
        return res.status(400).json({ error: 'Query string is missing field \'roman\'' })
    }
    if (roman === '') {
        return res.status(400).json({ error: 'Query string is missing numeral in field \'roman\'' })
    }

    console.log(roman)
    const arabic = deromanize(roman)
    console.log(arabic)

    res.send(arabic)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Contatine service running on port ${PORT}`)
})

const deromanize = (roman) => {
    // Regular expressions to check input is valid roman numeral.
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(roman)) {
        throw new Error('Input is not valid roman numeral')
    }

    let arabic = 0;
    roman.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (i) {
        arabic += { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }[i];
    })

    return arabic.toString();
}