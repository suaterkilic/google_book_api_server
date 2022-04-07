const context = require('../../models');

const save = async (req, res) => {

  try {

    const bookId = req.body.book_id;

    const bookMarkExist = context.bookmarks.findAll({
      where: {
        book_id: bookId
      }
    })

    bookMarkExist.then((rows) => {
      if(rows.length === 0) {
        const bookMarkStore = context.bookmarks.build(req.body)
    
        bookMarkStore.save()
        .then((rows) => {
          res.status(200)
          .send({
            success: true,
            error: false,
            message: 'Yer imlerine eklendi.'
          })
        })
      } else {
        res.status(200)
        .send({
          success: false,
          error: false,
          message: 'Zaten daha önce eklendiniz.'
        })
      }
    })



  } catch (error) {
    
  }
}

const fetch = async (req, res) => {

  try {

    const bookMark = context.bookmarks.findAll({
      where: {
        user_id: req.params.id
      }
    })

    bookMark.then((rows) => {

      res.status(200)
      .send({
        success: true,
        error: false,
        data: {
          bookmarks: rows
        }
      })

    })

  } catch (error) {

  }
}

const destroy = async (req, res) => {
  const bookMark = context.bookmarks.destroy({
    where: {
      user_id: req.params.id,
      book_id: req.body.book_id
    }
  })

  bookMark.then((result) => {
    
    res.status(200)
    .send({
      success: true,
      message: 'Silme işlemi başarılı',
      error: false
    })
  })


}

module.exports = {
  save,
  fetch,
  destroy
}