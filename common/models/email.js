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
      let convo
      let nlu
      if(ctx.instance.set === 'insurance'){
        console.log('it is an insurance email')
        convo = Conversation0
        nlu = nlu0
      } else if(ctx.instance.set === 'itasset'){
        console.log('it is an IT asset email')
        convo = Conversation1
        nlu = nlu1
      }
      let input = {
        input:{
          text:emailText
        }
      }
      var convoAnalysis = new Promise((resolve, reject) =>{
        convo.message(input).then(result => {
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
        nlu.analyzeText(emailText).then(result => {

          var addEntities = result[0].entities.map(item =>{
            console.log(item)
            if(ctx.instance.entities.hasOwnProperty(item.type)){
              ctx.instance.entities[item.type] = item.text
              return true
            } else {return false}
          })
          Promise.all(addEntities).then(value=>{
            let allTrue = Object.keys(ctx.instance.entities).every(itemKey =>ctx.instance.entities[itemKey])
            console.log(allTrue)
            if(allTrue){
              console.log('all items are true')
              ctx.instance.status = "Complete"
              ctx.instance.response = "Thanks, all done! We've automatically completed your request."
              console.log(ctx.instance)
            } else {
              console.log('at least one item is not true')
              console.log(ctx.instance)
            }
            resolve()
          })
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

  setInterval(function(){
      console.log('//// RUNNING EVERY 20 MINUTES')
      Email.destroyAll({
        permanent:false
      }, function(err, info){
        console.log(err)
        console.log(info)
      })
  }, 1200000);

};