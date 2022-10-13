// Code your solution in this file!
const homeBase = 42;
function distanceFromHqInBlocks(a){
    return Math.abs(a - homeBase);
}

function distanceFromHqInFeet(a){
    distanceFromHqInBlocks(a);
    return (distanceFromHqInBlocks(a) * 264)
}

const oneBlock = 264;
function distanceTravelledInFeet(a, b){
return Math.abs((a - b) * oneBlock);
}


function calculatesFarePrice(start, destination){
    let distance = Math.abs((start - destination)* oneBlock)
if (distance > 0 && distance < 400){
    return 0;
} else if (distance >= 400 && distance <= 2000){
    return (distance - 400) * .02;
} else if (distance > 2000 && distance < 2500){
    return 25;
} else if (distance > 2500){
    return "cannot travel that far";
}
}

