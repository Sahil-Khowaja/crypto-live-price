var btc = document.getElementById('bitcoin')
var eth = document.getElementById('ethereum')
var doge = document.getElementById('dogecoin')


var settings= {
    "async": true,
    "scrossDomain" :true,
    "url": "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,DOGE&tsyms=USD&api_key=3a7c0c63a26ea4d710e0356ba28780e95cb7a1c7928480e0083a845981a3368b",
    "method":"GET",
    "headers": {}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.BTC.USD
    eth.innerHTML = response.ETH.USD
    doge.innerHTML = response.DOGE.USD
})