const updateData = (req, res, db) => {

    const { id, completed } = req.body;

    db('items')
        .where( {id: id} )
        .update( {completed: completed} )
        .then(() => {
            db.select()
                .from('items')
                .then((items) => {
                    res.send(items)
                })
        })
}

module.exports = {
    updateData
}