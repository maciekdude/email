'use strict'

var app = require('../../server/server')

module.exports = function (Vr) {
  let sampleCloudant = app.models.SampleCloudant
  Vr.classifyFromCloudant = function (_id, cb) {
    sampleCloudant.findById(_id, function (err, product) {
      if (err) {
        cb(err)
      } else {
        var fileName
        for (var attachment in product._attachments) {
          if (product._attachments.hasOwnProperty(attachment)) {
            fileName = attachment
            break
          }
        }
        var vrUrl = process.env.CLOUDANT_CONNECTION_URL +
          '/' + process.env.CLOUDANT_QUEUE_DB +
          '/' + _id +
          '/' + fileName
        var owners = 'me'
        var classifierIds = process.env.VR_CLASSIFIER_IDS
        var threshold = '0.2'
        if (fileName) {
          Vr.classify(vrUrl, owners, classifierIds, threshold,
            function (err, classification) {
              if (err) {
                cb(err)
              } else {
                cb(null, classification)
              }
            }
          )
        }
      }
    })
  }
}
