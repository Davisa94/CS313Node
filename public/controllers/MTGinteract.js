
function callAjax(url, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
      callback(xhttp.responseText);
    }
  }
}


function findCard(){
  callAjax("getCard", callback)
  mtg.card.find(3)
  .then(result => {
    console.log(result.card);
  });
}

function returnCard(result)
{
  console.log(result)
}
