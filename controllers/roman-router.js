const romanRouter = require('express').Router()
const deromanize = require('../utils/deromanize')

romanRouter.get('/', (req, res) => {
    const roman = req.query.roman

    try {
        const arabic = resolveRomanQuery(roman)
        res.status(200).send(arabic)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

const resolveRomanQuery = (roman) => {
    if (roman === undefined) {
        throw new Error('Query string is missing field \'roman\'')
    }
    if (roman === '') {
        throw new Error('Query string is missing numeral in field \'roman\'')
    }

    try {
        const arabic = deromanize(roman)
        return arabic
    } catch (error) {
        throw new Error('Input is not valid roman numeral')
    }
}

module.exports = romanRouter