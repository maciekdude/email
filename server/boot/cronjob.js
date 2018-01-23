module.exports = function (app) {
  var interval = 10
  var deleteflag = true
  var AppCon = app.models.AppConfig
  var EmailModel = app.models.Email

  app.on('started', function () {
    console.log('inside app.on started');
    (function recursiveDelete () {
      console.log('inside recursive function')
      AppCon.findById('1').then((result) => {
        interval = result.interval
        deleteflag = result.deleteFlag
        console.log(result)
      })
      console.log(interval, deleteflag)
      setTimeout(function () {
        console.log('interval:', interval)
        console.log('//// RUNNING EVERY %i miliseconds', interval * 60 * 1000)
        if (deleteflag) {
          console.log('Inside the deleteFlag if:', deleteflag)
          EmailModel.destroyAll({
            permanent: false
          }, function (err, info) {
            console.log(err)
            console.log(info)
          })
        }
        recursiveDelete()
      }, interval * 60 * 1000)
    })()
  })
}
