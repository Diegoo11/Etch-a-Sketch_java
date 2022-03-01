let lienso = document.querySelector(".uwu")
let num = 4
let num2 = num*num
let var_box
let var_box2
let clases
let new_numer 
for(i=1; i<=num2; i++){
    let div = document.createElement("div")
    div.classList.add("owo")
    lienso.append(div)
}
let hello = 90/num
let pato = 1

let box = document.querySelectorAll(".owo")
box.forEach((qwe) => {
    qwe.setAttribute("style",`width: ${hello}%;`)
});

function raiz (numer){
    for(i=1; i<=numer; i++){
        if((numer / i)===i){
            return (i)
        }else{continue}
    }
}

window.addEventListener("mouseover",function(e){
    var_box2 =e.toElement.className
    var_box =e.srcElement
    if(var_box2==='owo'){
        if(pato===1){
            var_box.classList.add("ewe")
        }
        else if(pato===2){
            selectedColor = `#` + rainbowDraw();
            e.target.style.backgroundColor = selectedColor;
        }
    }
    
})
let new_tabla = document.getElementById("new")


let reset = document.getElementById("reset")
reset.onclick = function(){
    if(pato===1){clases = document.querySelectorAll('div')
        clases.forEach(asd => {
        asd.classList.remove("ewe")        
    })}
    else if(pato===2){
        if(new_numer){
            lienso.innerHTML = ""
            for(i=1; i<=new_numer*new_numer; i++){
                let div = document.createElement("div")
                div.classList.add("owo")
                lienso.append(div)
            }

            let hello = 90/new_numer
            
            let box = document.querySelectorAll(".owo")
            box.forEach((qwe) => {
                qwe.setAttribute("style",`width: ${hello}%;`)
            });
        }
        else{
            lienso.innerHTML = ""
            for(i=1; i<=num2; i++){
                let div = document.createElement("div")
                div.classList.add("owo")
                lienso.append(div)
            }
            let hello = 90/num
            
            let box = document.querySelectorAll(".owo")
            box.forEach((qwe) => {
                qwe.setAttribute("style",`width: ${hello}%;`)
            });
            console.log(num2)
        }
    }
    
}

new_tabla.onclick = function(){
    new_numer = prompt("digame un numero")
    lienso.innerHTML = ""
    for(i=1; i<=new_numer*new_numer; i++){
        let div = document.createElement("div")
        div.classList.add("owo")
        lienso.append(div)
    }

    let hello = 90/new_numer
    
    let box = document.querySelectorAll(".owo")
    box.forEach((qwe) => {
        qwe.setAttribute("style",`width: ${hello}%;`)
    });
}
let ewe = document.querySelector(".ewe")
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgbrandom = `rgb(${r},${g},${b})`;

let random = document.getElementById("random")
random.onclick = function(){
        clases = document.querySelectorAll('div')
        clases.forEach(asd => {
            asd.classList.remove("ewe")        
        })
        pato = 2

}

function rainbowDraw(){
    let color = ""
    color = Math.floor(Math.random()*16777215).toString(16);
    return color
}
let color_base = document.getElementById("color_base")
color_base.onclick = function(){
    if(pato===1){clases = document.querySelectorAll('div')
    clases.forEach(asd => {
    asd.classList.remove("ewe")        
})}
else if(pato===2){
    if(new_numer){
        lienso.innerHTML = ""
        for(i=1; i<=new_numer*new_numer; i++){
            let div = document.createElement("div")
            div.classList.add("owo")
            lienso.append(div)
        }

        let hello = 90/new_numer
        
        let box = document.querySelectorAll(".owo")
        box.forEach((qwe) => {
            qwe.setAttribute("style",`width: ${hello}%;`)
        });
    }
    else{
        lienso.innerHTML = ""
        for(i=1; i<=num2; i++){
            let div = document.createElement("div")
            div.classList.add("owo")
            lienso.append(div)
        }
        let hello = 90/num
        
        let box = document.querySelectorAll(".owo")
        box.forEach((qwe) => {
            qwe.setAttribute("style",`width: ${hello}%;`)
        });
        console.log(num2)
    }
}
    pato = 1
    
}