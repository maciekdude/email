'use strict'

var Cloudant = require('cloudant')
var app = require('../../server/server')

module.exports = function (Samplecloudant) {
  let dbUrl = app.datasources.cloudant.settings.url
  // Remote method that implements getting an attachement from Cloudant
  Samplecloudant.getAttachment = function (id, filename, contenttype, cb) {
    var cloudant = Cloudant(dbUrl)
    var productCatalogDB = cloudant.db.use(process.env.CLOUDANT_DB_NAME)

    productCatalogDB.attachment.get(id, filename, function (err, body) {
      if (!err) {
        // stream can be any of: string, buffer, ReadableStream (e.g. http.IncomingMessage)
        cb(null, body, contenttype)
      }
    })
  }

  // Remote method that implements saving an attachement to Cloudant
  Samplecloudant.saveAttachment = function (req, res, id, cb) {
    try {
      var cloudant = Cloudant(dbUrl)
      var productCatalogDB = cloudant.db.use(process.env.CLOUDANT_DB_NAME)

      if (!req.files || req.files.length === 0) {
        cb('No file image specified.')
        return
      }

      productCatalogDB.get(id, function (err, doc) {
        if (err || !doc) {
          cb(err)
        } else {
          // Add the attachment to the doc here.  The file element needs to be called productImage.
          productCatalogDB.attachment.insert(
            id,
            req.files[0].originalname,
            req.files[0].buffer,
            req.files[0].mimetype,
            {'rev': doc._rev}, function (err, result) {
              if (err) {
                cb(err)
              } else {
                cb(null, result)
              }
            }
          )
        }
      })
    } catch (err) {
      cb(err)
    }
  }
}
