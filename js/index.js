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
        top: 1930, 
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
        top: 4000,
        behavior: 'smooth' 
    })
}
setTimeout(scroll2str, 7500)
setTimeout(scroll3str, 16500)
setTimeout(scroll4str, 33000)
setTimeout(scroll5str, 50000)


document.getElementById('btn1').onclick = function() {
    document.getElementById('btn8').style.display='block';
}
document.getElementById('btn2').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
}
document.getElementById('btn3').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
}
document.getElementById('btn4').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
}
document.getElementById('btn5').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
}
document.getElementById('btn6').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
}
document.getElementById('btn7').onclick = function() {
    document.getElementById('btn8').style.display='block';
    
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
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn2-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn3-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn4-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn5-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn6-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}
document.getElementById('btn7-1').onclick = function() {
    document.getElementById('btn8-1').style.display='block';
}



function change(identifier) {
    
}