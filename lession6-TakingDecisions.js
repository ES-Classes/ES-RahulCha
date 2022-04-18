let x= 50;

if( x < 50) {
    let y = 89;
    console.log();

    if(true) {
        var z = 33;
    }
}

//console.log(y);

//CHaining and nesting

//switch
let currentTime = new Date();
let day = currentTime.getDay();
console.log(currentTime);
console.log(day);

switch(day) {
    case 0: console.log("It's Sunday");
    break;

    case 1: console.log("It's Monday ");
    break;
    
    case 2: console.log("It's Tuesday");
    break;
    
    case 3: console.log("It's Wednesday");
    break;
    
    case 4: console.log("It's THursday ");
    break;
    
    case 5: console.log("It's Friday");
    break;
    
    case 6: console.log("It's Saturday");
    break;
    default:
            break;
    
}
