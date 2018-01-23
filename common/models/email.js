'use strict';

module.exports = function(Email) {
  
  var app = require('../../server/server');
 
  /*Email.observe('loaded', function readSetting(ctx, next){
    var AppCon = app.models.AppConfig;
    AppCon.findById('1', function (err, result){
      console.log(result.interval, result.deleteFlag)
    });
  });*/
  Email.observe('before save', function enrich(ctx, next) {
    // console.log(ctx)
    var emailText = ctx.instance.text
    var Conversation0 = Email.app.models.Conversation0;
    var Conversation1 = Email.app.models.Conversation1;
    var nlu0 = Email.app.models.nlu0;
    var nlu1 = Email.app.models.nlu1;

    if (ctx.instance) {
      // console.log(ctx.instance)
      let convo
      let nlu
      if(ctx.instance.set === 'insurance'){
        // console.log('it is an insurance email')
        convo = Conversation0
        nlu = nlu0
      } else if(ctx.instance.set === 'itasset'){
        // console.log('it is an IT asset email')
        convo = Conversation1
        nlu = nlu1
      } else {
        convo = Conversation0
        nlu = nlu0
      }
      let input = {
        input:{
          text:emailText
        }
      }
      var convoAnalysis = new Promise((resolve, reject) =>{
        try{
          convo.message(input).then(result => {
            if(result[0].intents[0]){
              let intent = result[0].intents[0].intent
              ctx.instance.requestType = intent
              resolve();
            } else {
              reject();
            }
          }).catch(err =>{
            reject(err)
          })
        } catch(e) {
          reject(e)
        }
      })

      var nluAnalysis = new Promise((resolve, reject) =>{
        try{
          nlu.analyzeText(emailText).then(result => {

            var addEntities = result[0].entities.map(item =>{
              console.log(item)
              if(ctx.instance.entities.hasOwnProperty(item.type)){
                ctx.instance.entities[item.type] = item.text
                return true
              } else {return false}
            })

            Promise.all(addEntities).then(value =>{

              let allTrue = Object.keys(ctx.instance.entities).every(itemKey =>ctx.instance.entities[itemKey])
              console.log(allTrue)
              if(allTrue){
                // console.log('all items are true')
                ctx.instance.status = "Complete"
                ctx.instance.response = "Thanks, all done! We've automatically completed your request."
                resolve()
              } else {
                // console.log('at least one item is not true')
                resolve()
              }
            })

          }).catch(err =>{
            reject(err)
          })
        } catch(e) {
          reject(e)
        }
      })

      Promise.all([convoAnalysis, nluAnalysis]).then(value => {
        console.log(ctx.instance)
        console.log('all promises complete')
        next();
      }).catch((err) => {
        console.log(err)
        console.log('errored1')
      })
    } else {
      console.log('hit data, not ctx')
    }
  });
/*
  var interval = 10;
  var deleteflag = true;

  app.on('started', function(){
    console.log('inside app.on started');
  (function recursiveDelete() {
    console.log('inside recursive function');
    var AppCon = app.models.AppConfig;
    AppCon.findById('1').then((result) =>{
      interval=result.interval
      deleteflag=result.deleteFlag;
    });
    setTimeout(function() {
      console.log('interval:', interval)
      console.log('//// RUNNING EVERY %i miliseconds',interval*60*1000)
      if (deleteflag) {  
        console.log('Inside the deleteFlag if:',deleteflag)
        Email.destroyAll({
        permanent:false
      }, function(err, info){
        console.log(err)
        console.log(info)
      })}
    
      recursiveDelete();
    }, interval*60*1000);
   })();
  });*/
};
