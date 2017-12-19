'use strict'

module.exports = function (Respond) {
  Respond.sendEmail = function (text, to, cb) {
    Respond.app.models.Gmail.send({
      to: to,
      from: 'cognitivewatson@gmail.com',
      subject: 'Response from Lufthansa',
      text: text
    }, function (err, mail) {
      if (err === null) {
        console.log('email sent!')
        console.log(mail)
        cb(null, 'Success')
      } else {
        console.log(err)
        cb(err, 'Failed')
      }
    })
  }
  Respond.remoteMethod('sendEmail', {
    accepts: [{arg: 'text', type: 'string'}, {arg: 'to', type: 'string'}],
    returns: {arg: 'status', type: 'string'}

  })

  Respond.sendObject = function (data, cb) {
    let resSubject = 'RE: ' + data.subject
    console.log(resSubject)
    Respond.app.models.Gmail.send({
      to: data.to,
      from: 'cognitivewatson@gmail.com',
      subject: resSubject,
      text: data.text
    }, function (err, mail) {
      if (err === null) {
        console.log('Email sent!')
        console.log(mail)
        cb(null, 'Success')
      } else {
        console.log(err)
        cb(err, 'Failed')
      }
    })
  }
  Respond.remoteMethod(
      'sendObject',
    {
      accepts: [{arg: 'data', type: 'object', http: { source: 'body' }}],
      returns: {arg: 'status', type: 'string'},
      http: {
        path: '/sendObject',
        verb: 'post',
        status: 201
      }
    })
}
