const getHomepage = (req, res) => {
    res.send('Hello Phap')
}
const getA = (req, res) => {
    res.send('Hello a')
}
module.exports = {
    getHomepage, getA
}