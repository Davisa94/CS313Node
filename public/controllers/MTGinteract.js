const mtg = require('mtgsdk');

function findCard(){
  mtg.card.find(3)
  .then(result => {
    console.log(result.card);
  });
}
