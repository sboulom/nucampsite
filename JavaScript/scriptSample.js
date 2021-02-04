while(i<10){
    console.log("The iterator is", i);
    i++;
}

i = 0;
let earlyEscapeNum = 6;

while (i<10) {
    if(i == earlyEscapeNum){
        break;
    }
    console.log("the Iterator is" +  i + "foo");
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log("The iterator is", i + "foo")
    
}

[4,5,6,7,8]