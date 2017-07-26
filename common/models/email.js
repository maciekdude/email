'use strict';

module.exports = function(Email) {

  Email.observe('before save', function enrich(ctx, next) {
    var Conversation0 = Email.app.models.Conversation0;
    var Conversation1 = Email.app.models.Conversation1;
    var nlu0 = Email.app.models.nlu0;
    var nlu1 = Email.app.models.nlu1;
    if (ctx.instance) {
      let input = {
        input:{
          text:ctx.instance.text
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
      convoAnalysis.then(value => {
        next();
      })
    } else {
      console.log('hit data, not ctx')
    }
  });

};
