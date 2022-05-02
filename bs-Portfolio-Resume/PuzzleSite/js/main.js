
let listOfClasses = ['cr1','cr2','cr3','cr4','cr5','cr6','cr7','cr8','cr9','oc1','oc2','oc3','oc4','oc5','oc6','oc7','oc8','oc9'];
let index1=0, index2=0, index3=0, index4=0, index5=0, index6=0, index7=0, index8=0, index9 = 0;
let listBtn1, listBtn2;
document.getElementById('one').addEventListener('click',change1);
document.getElementById('two').addEventListener('click',change2);
document.getElementById('three').addEventListener('click',change3);
document.getElementById('four').addEventListener('click',change4);
document.getElementById('five').addEventListener('click',change5);
document.getElementById('six').addEventListener('click',change6);
document.getElementById('seven').addEventListener('click',change7);
document.getElementById('eight').addEventListener('click',change8);
document.getElementById('nine').addEventListener('click',change9);

document.getElementById('one').addEventListener('contextmenu',less1);
document.getElementById('two').addEventListener('contextmenu',less2);
document.getElementById('three').addEventListener('contextmenu',less3);
document.getElementById('four').addEventListener('contextmenu',less4);
document.getElementById('five').addEventListener('contextmenu',less5);
document.getElementById('six').addEventListener('contextmenu',less6);
document.getElementById('seven').addEventListener('contextmenu',less7);
document.getElementById('eight').addEventListener('contextmenu',less8);
document.getElementById('nine').addEventListener('contextmenu',less9);

function check(){
    if(
        (document.getElementById('one').className == 'cr1' && document.getElementById('two').className =='cr2' &&
        document.getElementById('three').className == 'cr3'  && document.getElementById('four').className  == 'cr4' &&
        document.getElementById('five').className == 'cr5' && document.getElementById('six').className == 'cr6' &&
        document.getElementById('seven').className == 'cr7' && document.getElementById('eight').className == 'cr8' &&
        document.getElementById('nine').className == 'cr9')||
        (document.getElementById('one').className == 'oc1' && document.getElementById('two').className =='oc2' &&
        document.getElementById('three').className == 'oc3'  && document.getElementById('four').className  == 'oc4' &&
        document.getElementById('five').className == 'oc5' && document.getElementById('six').className == 'oc6' &&
        document.getElementById('seven').className == 'oc7' && document.getElementById('eight').className == 'oc8' &&
        document.getElementById('nine').className == 'oc9')
    ){
        let tag = document.createElement('h1');
        let text = document.createTextNode('You Win!');
        tag.appendChild(text);

        document.getElementById('five').appendChild(tag);
    }
    else{
        document.getElementById('one').innerHTML = '';
        document.getElementById('two').innerHTML = '';
        document.getElementById('three').innerHTML = '';
        document.getElementById('four').innerHTML = '';
        document.getElementById('five').innerHTML = '';
        document.getElementById('six').innerHTML = '';
        document.getElementById('seven').innerHTML = '';
        document.getElementById('eight').innerHTML = '';
        document.getElementById('nine').innerHTML = '';
        // document.getElementById('heich').className = 'heich';
    }
}

function shuffle(array) {
    newArray = array.slice();
    let currentIndex = newArray.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

listBtn1 = shuffle(listOfClasses);
listBtn2 = shuffle(listBtn1);
let listBtn3 = shuffle(listBtn2);
let listBtn4 = shuffle(listBtn3);
let listBtn5 = shuffle(listBtn4);
let listBtn6 = shuffle(listBtn5);
let listBtn7 = shuffle(listBtn6);
let listBtn8 = shuffle(listBtn7);
let listBtn9 = shuffle(listBtn8);

console.log(listBtn1);
console.log(listBtn2);
console.log(listBtn3);
console.log(listBtn4);
console.log(listBtn5);
console.log(listBtn6);
console.log(listBtn7);
console.log(listBtn8);
console.log(listBtn9);

let lessa = false;

function change1(){
    console.log(index1);
    document.getElementById('one').innerHTML = '';
    document.getElementById('one').className = '';
    let newTile = listBtn1[index1];
    let arLen = listBtn1.length;
    if(lessa==false){
        index1 ++;   
    }
    else if (lessa==true){
        index1 --;
    }
    if (arLen==index1){
        index1=0;
    }
    if (index1 <0){
        index1= arLen-1;
    }
    document.getElementById('one').className = newTile;
    check();
}
function change2(){
    console.log(index2);
    document.getElementById('two').innerHTML = '';
    document.getElementById('two').className = '';

    let arLen = listBtn2.length;
    if(lessa==false){
        index2 ++;   
    }
    else if (lessa==true){
        index2 --;
    }
    if (arLen==index2){
        index2=0;
    }
    if (index2 <0){
        index2= arLen-1;
    }
    let newTile = listBtn2[index2];
    document.getElementById('two').className = newTile;
    check();
}
function change3(){
    console.log(index3);
    document.getElementById('three').innerHTML = '';
    document.getElementById('three').className = '';

    let arLen = listBtn3.length;
    if(lessa==false){
        index3 ++;   
    }
    else if (lessa==true){
        index3 --;
    }
    if (arLen==index3){
        index3=0;
    }
    if (index3 <0){
        index3= arLen-1;
    }
    let newTile = listBtn3[index3];
    document.getElementById('three').className = newTile;
    check();
}
function change4(){
    console.log(index4);
    document.getElementById('four').innerHTML = '';
    document.getElementById('four').className = '';

    let arLen = listBtn4.length;
    if(lessa==false){
        index4 ++;   
    }
    else if (lessa==true){
        index4 --;
    }
    if (arLen==index4){
        index4=0;
    }
    if (index4 <0){
        index4= arLen-1;
    }
    let newTile = listBtn4[index4];
    document.getElementById('four').className = newTile;
    check();
}
function change5(){
    console.log(index5);
    document.getElementById('five').innerHTML = '';
    document.getElementById('five').className = '';

    let arLen = listBtn5.length;
    if(lessa==false){
        index5 ++;   
    }
    else if (lessa==true){
        index5 --;
    }
    if (arLen==index5){
        index5=0;
    }
    if (index5 <0){
        index5= arLen-1;
    }
    let newTile = listBtn5[index5];
    document.getElementById('five').className = newTile;
    check();
}
function change6(){
    console.log(index6);
    document.getElementById('six').innerHTML = '';
    document.getElementById('six').className = '';

    let arLen = listBtn6.length;
    if(lessa==false){
        index6 ++;   
    }
    else if (lessa==true){
        index6 --;
    }
    if (arLen==index6){
        index6=0;
    }
    if (index6 <0){
        index6= arLen-1;
    }
    let newTile = listBtn6[index6];
    document.getElementById('six').className = newTile;
    check();
}
function change7(){
    console.log(index7);
    document.getElementById('seven').innerHTML = '';
    document.getElementById('seven').className = '';

    let arLen = listBtn7.length;
    if(lessa==false){
        index7 ++;   
    }
    else if (lessa==true){
        index7 --;
    }
    if (arLen==index7){
        index7=0;
    }
    if (index7 <0){
        index7= arLen-1;
    }
    let newTile = listBtn7[index7];
    document.getElementById('seven').className = newTile;
    check();
}
function change8(){
    console.log(index8);
    document.getElementById('eight').innerHTML = '';
    document.getElementById('eight').className = '';

    let arLen = listBtn8.length;
    if(lessa==false){
        index8 ++;   
    }
    else if (lessa==true){
        index8 --;
    }
    if (arLen==index8){
        index8=0;
    }
    if (index8 <0){
        index8= arLen-1;
    }
    let newTile = listBtn8[index8];
    document.getElementById('eight').className = newTile;
    check();
}
function change9(){
    console.log(index9);
    document.getElementById('nine').innerHTML = '';
    document.getElementById('nine').className = '';

    let arLen = listBtn9.length;
    if(lessa==false){
        index9 ++;   
    }
    else if (lessa==true){
        index9 --;
    }
    if (arLen==index9){
        index9=0;
    }
    if (index9 <0){
        index9= arLen-1;
    }
    let newTile = listBtn9[index9];
    document.getElementById('nine').className = newTile;
    check();
}



function less1(){
    lessa = true;
    change1();
    lessa = false;
}
function less2(){
    lessa = true;
    change2();
    lessa = false;
}
function less3(){
    lessa = true;
    change3();
    lessa = false;
}
function less4(){
    lessa = true;
    change4();
    lessa = false;
}
function less5(){
    lessa = true;
    change5();
    lessa = false;
}
function less6(){
    lessa = true;
    change6();
    lessa = false;
}
function less7(){
    lessa = true;
    change7();
    lessa = false;
}
function less8(){
    lessa = true;
    change8();
    lessa = false;
}
function less9(){
    lessa = true;
    change9();
    lessa = false;
}

