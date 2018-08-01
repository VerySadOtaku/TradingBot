const binance = require('node-binance-api')().options({
    APIKEY: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A',
    APISECRET: 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j',
    useServerTime: true,
    test: true 
  });
  
  let CryptSymbArray = [];
  
  function pair(currVar){
  
  binance.prices((error, ticker) => {
    Object.keys(ticker).forEach(function(k, index, array){
      if(k.indexOf(currVar) >= 0)
      CryptSymbArray.push(k.replace(currVar, ""));
  
    if(array.length == index+1)
        console.log(CryptSymbArray);
  });
  });
  
  }
  
  pair("USDT");