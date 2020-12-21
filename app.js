let button = document.getElementById("button");
let div = document.getElementById("affichage");
let time = 0

function timeOut(){
    let recur = setTimeout(function(){
        div.innerHTML = time;
        if(time === 10){
            return false
        }
        time ++;
        timeOut()
    },1000)
}

button.addEventListener("click", timeOut)