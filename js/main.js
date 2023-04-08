function fun(){
    alert("you Form has been submitted!")
    alert("thanks for contacting...")
}

x=document.getElementById("phn");
y=document.getElementById("ph");
z=document.getElementById("Input1");
function check(){
    if(x.checked==true){
        y.style.display="inline-block"
        z.style.display="block"
       
    }
    else{
        y.style.display="none"
        z.style.display="none"
    } 
}

