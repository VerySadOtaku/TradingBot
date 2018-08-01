const binance = require('node-binance-api')().options({
    APIKEY: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A',
    APISECRET: 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j',
    useServerTime: true,
    test: true 
  });
  
  
 function GetPairs(first, second)
 {
    binance.prices((error, ticker) => {
        let firstPair = [];
        let finalPair = [];

        Object.keys(ticker).forEach(function(k, index, array)
        {
          if(k.indexOf(first) >= 0)
            firstPair.push(k.replace(first, ""));                               //First array
          
        if(array.length == index+1)
                {
                    let tickerObject = Object.keys(ticker);
                    console.log(tickerObject);
                    firstPair.forEach(function(k, index, array)
                    {
                        if(tickerObject.includes(k+second))
                        {
                            finalPair.push(k);
                            console.log(k);                                     
                        }                     
                    });
                }
        });
    });
 }

 GetPairs("BTC", "USDT");