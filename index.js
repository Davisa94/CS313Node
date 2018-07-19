const express = require('express')
const path = require('path')
const mtg = require('mtgsdk')

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test', (req, res) => res.render('pages/mainTable'))
  .get('/findCard', findCard(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function renderMain(ineract, res){
  defineInteract(interact)
  res.render('pages/mainTable')
}

function findCard(req, res)
{
  var result = mtg.card.find(3)(result, function(err, res){
    if (err){
      console.log("error");
      res.status(500).json({success: false});
    }
    else{
      res.JSON(result);
    }
  });
}
