




//********************************************************** */



let con = document.getElementsByClassName("con")[0]
let card = document.getElementsByClassName("card")[0]

let inp = document.getElementById("one")

let btn = document.getElementById("sub")

let img = document.getElementsByTagName("img")[0]


btn.addEventListener("click",()=>{

    if(inp.value.length<=0){
        alert("no input...")
    }

else{
img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%20${inp.value}`

img.style.display="block"

}
inp.value="";

})