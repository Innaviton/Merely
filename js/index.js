bt1 = 0;
bt2 = 0;
bt3 = 0;
bt4 = 0;
bt5 = 0;
bt6 = 0;
bt7 = 0;
bt1_1 = 0;
bt2_1 = 0;
bt3_1 = 0;
bt4_1 = 0; 
bt5_1 = 0;
bt6_1 = 0;
bt7_1 = 0;
mas = [];
idBut = 0;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);    
}



function scroll2str() {
    window.scrollTo({
        top: 960, 
        left: 0,
        behavior: 'smooth' 
    })
}  

function scroll3str() {
    window.scrollTo({
        top: 1960, 
        left: 0,
        behavior: 'smooth' 
    })
}
function scroll4str() {
    window.scrollTo({
        top: 2800, 
        left: 0,
        behavior: 'smooth' 
    })
}

function scroll5str() {
    window.scrollTo({
        top: 3980,
        behavior: 'smooth' 
    })
}

function scroll6str() {
    window.scrollTo({
        top: 5000,
        behavior: 'smooth' 
    })
}

setTimeout(scroll2str, 7500)
setTimeout(scroll3str, 16500)
setTimeout(scroll4str, 33000)
setTimeout(scroll5str, 50000)
setTimeout(scroll6str, 55000)



document.getElementById('btn1').onclick = function() {
    if (bt1 == 0){bt1 +=1} else {bt1 = 0}
    if (bt1 == 1){
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "Разработка Landing Page"
        document.getElementById('btn8').style.display='block';
    } else{
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}

document.getElementById('btn2').onclick = function() {
    if (bt2 == 0){bt2 +=1} else {bt2 = 0}
    if (bt2 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        btns = "разработка кооперативных сайтов"
        document.getElementById('btn8').style.display='block';
        this.style.backgroundColor = '#8487FF'
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn3').onclick = function() {
    if (bt3 == 0){bt3 +=1} else {bt3 = 0}   
    if (bt3 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "разработка порталов"
        document.getElementById('btn8').style.display='block';
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    } 
}
document.getElementById('btn4').onclick = function() {
    if (bt4 == 0){bt4 +=1} else {bt4 = 0}    
    if (bt4 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "разработка маркетплейсов"
        document.getElementById('btn8').style.display='block';   
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';   
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn5').onclick = function() {
    if (bt5 == 0){bt5 +=1} else {bt5 = 0}     
    if (bt5 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "разработка интернет-магазинов"
        document.getElementById('btn8').style.display='block';
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }   
}
document.getElementById('btn6').onclick = function() {
    if (bt6 == 0){bt6 +=1} else {bt6 = 0}  
    if (bt6 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn7').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "Другое"
        document.getElementById('btn8').style.display='block';
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn7').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }         
}
document.getElementById('btn7').onclick = function() {
    if (bt7 == 0){bt7 +=1} else {bt7 = 0} 
    if (bt7 == 1){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        this.style.backgroundColor = '#8487FF'
        btns = "Пока не знаю, что нужно"
        document.getElementById('btn8').style.display='block';
    } else{
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn5').disabled = false;
        document.getElementById('btn6').disabled = false;
        document.getElementById('btn8').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }        
}

document.getElementById('btn8').onclick = function() {
    document.getElementById('question-1').style.display='none';
    document.getElementById('question-2').style.display='block';   
}


document.getElementById('btn2.1').onclick = function() {
    document.getElementById('question-2').style.display='none';
    document.getElementById('question-3').style.display='block';
}

document.getElementById('btn2.2').onclick = function() {
    document.getElementById('question-2').style.display='none';
    document.getElementById('question-1').style.display='block'; 
}

document.getElementById('btn3.1').onclick = function() {
    document.getElementById('question-3').style.display='none';
    document.getElementById('question-4').style.display='block';  
  
}

document.getElementById('btn3.2').onclick = function() {
    document.getElementById('question-3').style.display='none';
    document.getElementById('question-2').style.display='block'; 
}

document.getElementById('btn8-1').onclick = function() {
    document.getElementById('question-4').style.display='none';
    document.getElementById('question-5').style.display='block';   
}


document.getElementById('btn9').onclick = function() {
    document.getElementById('question-4').style.display='none';
    document.getElementById('question-3').style.display='block';   
}

document.getElementById('btn4.1').onclick = function() {
    document.getElementById('question-5').style.display="none"
    document.getElementById('question-6').style.display='block';
}

document.getElementById('btn4.2').onclick = function() {
    document.getElementById('question-6').style.display="none"
    document.getElementById('question-5').style.display='block';
}

document.getElementById('btn5_1').onclick = function() {
    document.getElementById('question-6').style.display="none"
    document.getElementById('question-7').style.display='block';
}

document.getElementById('btn5.2').onclick = function() {
    document.getElementById('question-6').style.display="none"
    document.getElementById('question-5').style.display='block';
}

document.getElementById('btn1-1').onclick = function() {
    if (bt1_1 == 0){bt1_1 +=1} else {bt1_1 = 0} 
    if (bt1_1 == 1) {
        document.getElementById('btn8-1').style.display='block';
        mas.push ("Брендовый элемент ")
        this.style.backgroundColor = '#8487FF'
    } else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn2-1').onclick = function() {
    if (bt2_1 == 0){bt2_1 +=1} else {bt2_1 = 0} 
    if (bt2_1 == 1) {
        document.getElementById('btn8-1').style.display='block';
        mas.push ("Привлекать клиентов ")
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn3-1').onclick = function() {
    if (bt3_1 == 0){bt3_1 +=1} else {bt3_1 = 0} 
    if (bt3_1 == 1) {
        mas.push ("Создавать положительную репутацию в сети ")
        document.getElementById('btn8-1').style.display='block';
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn4-1').onclick = function() {
    if (bt4_1 == 0){bt4_1 +=1} else {bt4_1 = 0} 
    if (bt4_1 == 1) {
        mas.push ("Повысить трафик");
        document.getElementById('btn8-1').style.display='block';
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn5-1').onclick = function() {
    if (bt5_1 == 0){bt5_1 +=1} else {bt5_1 = 0} 
    if (bt5_1 == 1) {
        mas.push ("Протестировать гипотезы ")
        document.getElementById('btn8-1').style.display='block';
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn6-1').onclick = function() {
    if (bt6_1 == 0){bt6_1 +=1} else {bt6_1 = 0} 
    if (bt6_1 == 1) {
        document.getElementById('btn8-1').style.display='block';
        mas.push ("Другое ")
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}
document.getElementById('btn7-1').onclick = function() {
    if (bt7_1 == 0){bt7_1 +=1} else {bt7_1 = 0} 
    if (bt5_1 == 1) {
        document.getElementById('btn8-1').style.display='block';
        mas.push ("Принимать онлайн оплаты на самом сайте ")
        this.style.backgroundColor = '#8487FF'
    }else {mas.pop()
        document.getElementById('btn8-1').style.display='none';
        this.style.backgroundColor =  '#eaeaee'
    }
}


    const TOKEN = "5681995083:AAGJtODHRLlM9GTMt8nRVExmRSj36-cocIY";
    const CHAT_ID = "-1001888067535";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    document.getElementById('tg-1').addEventListener('submit', function(e){
        e.preventDefault();

        let message = `<b>Новая заявка</b>\n`
        message += `Пользователя интересует: ${btns}\n`
        message += `Ниша: ${this.nisha.value} \n`
        message += `Город: ${this.town.value} \n`
        message += `Функции сайта ${mas} \n`
        message += `Удобное время: ${this.time.value} \n`
        message += `Телефон: ${this.tel.value}`

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
    })



document.getElementById('menu__box').addEventListener('submit', function(e){
    e.preventDefault();
})