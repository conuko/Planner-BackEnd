const addData = (req, res, db) => {

    const { id, text } = req.body;

    db('items').insert({
        id: id,
        text: text,
    }).then(console.log)

    // db.transaction(trx => {
    //     trx.insert({
    //         id: id,
    //         text: text,
    //     })
    //     .into('items')
    //     .returning('text')
    //     .then()
    // })
}

module.exports = {
    addData
}