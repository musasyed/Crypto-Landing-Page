let btc=document.getElementById("bitcoin");
let eth=document.getElementById("ethereum");
let doge=document.getElementById('dogecoin');



let fetchApi=async function fetchMoviesJSON() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');
    const coins = await response.json();
    btc.innerHTML=coins.bitcoin.usd;
    eth.innerHTML=coins.ethereum.usd;
    doge.innerHTML=coins.dogecoin.usd;
  }
  fetchApi();