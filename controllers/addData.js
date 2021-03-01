const addData = (req, res, db) => {

    const { id, text } = req.body;

    db('items').insert({
        id: id,
        text: text,
    }).then(console.log)
}

module.exports = {
    addData
}