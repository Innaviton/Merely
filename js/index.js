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
        top: 2900, 
        left: 0,
        behavior: 'smooth' 
    })
}

setTimeout(scroll2str, 7500)
setTimeout(scroll3str, 16500)
setTimeout(scroll4str, 33000)