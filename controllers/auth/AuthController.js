

const context = require('../../models');
const md5     = require('md5');

const login = async (req, res) => {

  try {

    if(req.body.username.length > 0 && req.body.password.length > 0) {

      const fetchUser = context.users.findAll({
        where: {
          username: req.body.username
        }
      })

      fetchUser.then((rows) => {

        if(rows.length === 0) {

          req.body.password = md5(req.body.password)

          const userStore = context.users.build(req.body);

          userStore.save()
          .then((rows) => {

            delete rows['dataValues']['password'];

            const userData = rows.dataValues;

            res.status(200)
            .send({
              success: true,
              error: false,
              data: {
                user: userData
              }
            })
          })
          .catch((error) => {
            res.status(400)
            .send({
              success: false,
              error: true,
              message: 'Bad Request'
            })
          })

        } else {

          const userData = context.users.findOne({
            where: {
              username: req.body.username
            }
          })
          
          let userResult = null;

          userData.then((rows) => {
            res.status(200)
            .send({
              success: true,
              error: false,
              message: null,
              data: {
                user: rows.dataValues.id
              }
            })

          })


        }

      })
    }

  } catch (error) {

    res.status(500)
    .send({
      success: false,
      error: true,
      message: 'Internal Server Error'
    })
  }
  
}

module.exports = {
  login
};
