'use strict'

import {genericRequestRawPromise} from '../util/api'

module.exports = function (NaturalLanguage) {
  NaturalLanguage.disableRemoteMethod('invoke', true)
  // Define the getSentiment method
  NaturalLanguage.getSentiment = async function (text, cb) {
    let response = {}
    try {
      response = await genericRequestRawPromise({
        url: process.env.NATURAL_LANGUAGE_URL + '/v1/analyze',
        method: 'POST',
        qs: {
          version: process.env.NATURAL_LANGUAGE_VERSION
        },
        json: true,
        body: {
          text: text,
          features: {
            sentiment: {}
          }
        },
        auth: {
          username: process.env.NATURAL_LANGUAGE_USERNAME,
          password: process.env.NATURAL_LANGUAGE_PASSWORD
        }
      })
    } catch (e) {
      console.log(e)
      throw (e)
    }
    if (response && response.sentiment.document) {
      return [response.sentiment.document.score || 0, response.sentiment.document.label || 'unknown']
    } else {
      return [0, 'unknown']
    }
  }

  // Define the getEmotion method
  NaturalLanguage.getEmotion = async function (text, cb) {
    let response = {}
    try {
      response = await genericRequestRawPromise({
        url: process.env.NATURAL_LANGUAGE_URL + '/v1/analyze',
        method: 'POST',
        qs: {
          version: process.env.NATURAL_LANGUAGE_VERSION
        },
        json: true,
        body: {
          text: text,
          features: {
            emotion: {}
          }
        },
        auth: {
          username: process.env.NATURAL_LANGUAGE_USERNAME,
          password: process.env.NATURAL_LANGUAGE_PASSWORD
        }
      })
    } catch (e) {
      console.log(e)
      throw (e)
    }
    console.log(response)
    let highScore = -1
    let primaryEmotion = ''
    if (response && response.emotion && response.emotion.document && response.emotion.document.emotion) {
      for (let property in response.emotion.document.emotion) {
        if (Number(response.emotion.document.emotion[property]) > highScore) {
          primaryEmotion = property
          highScore = Number(response.emotion.document.emotion[property])
        } else if (Number(response.emotion.document.emotion[property]) === highScore) {
          primaryEmotion += ', ' + property
        }
      }
    } else {
      return ['no emotion', 0]
    }
    return [highScore === 0 ? 'no emotion' : primaryEmotion, highScore]
  }

  // Register the Remote Method
  NaturalLanguage.remoteMethod(
    'getSentiment', {
      description: 'Returns the primary emotion of the supplied text',
      http: {
        path: '/getSentiment',
        verb: 'get'
      },
      accepts: [
        {
          arg: 'text',
          type: 'string',
          http: {source: 'query'},
          description: 'Text input for sentiment analysis',
          required: true
        }
      ],
      returns: [
        {
          arg: 'sentimentScore',
          type: 'number',
          description: 'The sentiment score of the supplied text'
        },
        {
          arg: 'sentimentType',
          type: 'string',
          description: 'The classified sentiment based on score (positive, negative, neutral)'
        }
      ]
    }
  )

  // Register the Remote Method
  NaturalLanguage.remoteMethod(
    'getEmotion', {
      description: 'Returns the primary emotion for the supplied text',
      http: {
        path: '/getEmotion',
        verb: 'get'
      },
      accepts: [
        {
          arg: 'text',
          type: 'string',
          http: {source: 'query'},
          description: 'Text input for emotion analysis',
          required: true
        }
      ],
      returns: [
        {
          arg: 'primaryEmotion',
          type: 'string',
          description: 'The primary emotion of the supplied text'
        },
        {
          arg: 'primaryEmotionScore',
          type: 'number',
          description: 'The confidence score for the primary emotion'
        }
      ]
    }
  )
}
