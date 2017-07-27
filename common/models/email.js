'use strict';

module.exports = function(Email) {

  Email.observe('before save', function enrich(ctx, next) {
    var emailText = ctx.instance.text
    var Conversation0 = Email.app.models.Conversation0;
    var Conversation1 = Email.app.models.Conversation1;
    var nlu0 = Email.app.models.nlu0;
    var nlu1 = Email.app.models.nlu1;

    if (ctx.instance) {
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
      })
      Promise.all([convoAnalysis, nluAnalysis]).then(value => {
        next();
      })
    } else {
      console.log('hit data, not ctx')
    }
  });

};
