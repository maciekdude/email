'use strict';

module.exports = function(Email) {

  Email.observe('before save', function enrich(ctx, next) {
    var emailText = ctx.instance.text
    var Conversation0 = Email.app.models.Conversation0;
    var Conversation1 = Email.app.models.Conversation1;
    var nlu0 = Email.app.models.nlu0;
    var nlu1 = Email.app.models.nlu1;

    if (ctx.instance) {
      console.log(ctx.instance)
      let input = {
        input:{
          text:emailText
        }
      }
      var convoAnalysis = new Promise((resolve, reject) =>{
        Conversation1.message(input).then(result => {
          if(result[0].intents[0]){
            let intent = result[0].intents[0].intent
            ctx.instance.requestType = intent
            resolve();
          } else {
            resolve();
          }
        }, reject =>{
          console.log(reject)
          console.log(reject.Error)
        })
      })
      var nluAnalysis = new Promise((resolve, reject) =>{
        nlu0.analyzeText(emailText).then(result => {
          var addEntities = result[0].entities.map(item =>{
            if(ctx.instance.entities.hasOwnProperty(item.type)){
              ctx.instance.entities[item.type] = item.text
            }
          })
          Promise.all(addEntities).then(value=>{resolve();})
        })
      }, reject =>{
        console.log(reject)
      })
      Promise.all([convoAnalysis, nluAnalysis]).then(value => {
        next();
      })
    } else {
      console.log('hit data, not ctx')
    }
  });

  // var now = new Date();
  // var millisTill12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) - now;
  // if (millisTill12 < 0) {
  //      millisTill12 += 86400000; // it's after 12am, try 12am tomorrow.
  // }
  // setTimeout(function(){
  //
  // }, millisTill12);

  setInterval(function(){
      console.log('//// RUNNING EVERY 5 SECONDS')
      Email.destroyAll({
        permanent:false
      }, function(err, info){
        console.log(err)
        console.log(info)
      })
  }, 5000);

};
