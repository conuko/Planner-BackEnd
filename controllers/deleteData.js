const deleteData = (req, res, db) => {

    const { id } = req.body;

    db('items')
        .where( {id: id} )
        .del()
        .then(() => {
            db.select()
                .from('items')
                .then((items) => {
                    res.send(items)
                })
        })
}

module.exports = {
    deleteData
}