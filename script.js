var banner = [
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649683696/WebBanner/Banner323.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649175874/WebBanner/Banner321.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648873882/WebBanner/Banner318.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1644816631/WebBanner/Banner296.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1646237005/WebBanner/Banner306.png',
]

var innerDIv = document.querySelector('.innerDIv');
var waitOrder = document.querySelector('.waitOrder');
var orderMessage = document.querySelector('#orderMessage');
banner.map((e)=> {
    var div = document.createElement('div');
    div.innerHTML = `<img src="${e}" alt="">`;
    innerDIv.append(div);
});


var itemOne = document.querySelector('#checkbox1');
var itemTwo = document.querySelector('#checkbox2');
var itemThree = document.querySelector('#checkbox3');
var itemFour = document.querySelector('#checkbox4');

function orderPromis(time){
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve(`Order is Ready...`);
            console.log(time);
        }, (time+1)*1000);
        countDown(time);
        console.log(time);
    });
};

function countDown(time){
    var x = setInterval(function(){
        if(time===0){
            runStop(x);
        }
        waitOrder.innerHTML = ` Wait for &nbsp; <i class="fas fa-stopwatch-20"></i> <span id='counter'>${time--} second</span>`
    },1000)
}
function runStop(x){
    clearInterval(x);
    setTimeout(function(){
        clearOrderDetail();
    },3000)
    
}
function clearOrderDetail(){
    itemOne.checked = false;
    itemTwo.checked = false;
    itemThree.checked = false;
    itemFour.checked = false;
    waitOrder.innerHTML = null;
    orderMessage.innerHTML = null;
    itemOne.checked = false;
    itemTwo.checked = false;
    itemThree.checked = false;
    itemFour.checked = false;
}

async function run(time){
    var response = await orderPromis(time);
    orderMessage.textContent = response;
}


function orderFood(){
    let time = Math.random()*8 +4;
    alert('order confirm');
    run(Math.floor(time));
    
    
}

