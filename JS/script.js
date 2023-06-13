let i=0;
let text="Deepak Prajapati & Anjali Prajapati";
var speed=100;

function typewrite(){
    if(i<text.length){
        document.getElementById('root').innerHTML +=text.charAt(i);
        i++;
        setTimeout(typewrite,speed);
    }
}

let a=0;
let txt="Deepak Prajapati website Create I'm developer in google";

function typewrite1(){
    if(a<txt.length){
        document.getElementById('box1').innerHTML +=txt.charAt(a);
        a++;
        setTimeout(typewrite1,70);
    }
}