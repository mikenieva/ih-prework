// Rover Object Goes Here
// ======================
let rover = {
    direction: "N",
    fullDirection: "North",
    x: 0,
    y: 0,
    travelLog: [],
    image: "<img src=\'img/marsrover.png\' style=\'width:30px\';>"
}

console.log("Welcome to the game");
console.log("You are going to drive a Rover on the space. 🚀 ");

// Functions
// ======================
function turnLeft(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      rover.fullDirection = "West";
      break;
    case "W":
      rover.direction = "S";
      rover.fullDirection = "South";
      break;
    case "S":
      rover.direction = "E";
      rover.fullDirection = "East";
      break;
    case "E":
      rover.direction = "N";
      rover.fullDirection = "North";
      break;
  }
  console.log("Rover is now facing " + rover.fullDirection);
  console.log("=====");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      rover.fullDirection = "East";
      break;
    case "E":
      rover.direction = "S";
      rover.fullDirection = "South";
      break;
    case "S":
      rover.direction = "W";
      rover.fullDirection = "West";
      break;
    case "W":
      rover.direction = "N";
      rover.fullDirection = "North";
      break;
  }
  console.log("Rover is now facing " + rover.fullDirection); 
  console.log("=====");
}

function moveForward(rover){
  document.getElementById(rover.x + "-" + rover.y).innerHTML= " ";
  switch (rover.direction) {
    case "W":
      if (rover.x == 0){
        console.log("Turn left or right. The rover could be roam off the map!");
      } else {
        rover.x -= 1;
      }
      break;

    case "N":
        if (rover.y == 0){
          console.log("Turn left or right. The rover could be roam off the map!");
        } else {
          rover.y -= 1;
        }
      break;

    case "S":
        if (rover.y == 10){
          console.log("Turn left or right. The rover could be roam off the map!");
        } else {
          rover.y += 1;
        }
      break;

    case "E":
      if (rover.x == 10){
        console.log("Turn left or right. The rover could be roam off the map!");
      } else {
        rover.x += 1;
      }
      break;                      
  }
  console.log("The Rover's coordinates are: " + rover.x + "," + rover.y + " and it's pointing to the " + rover.fullDirection);
  console.log("=====");
  document.getElementById(rover.x + "-" + rover.y).innerHTML= rover.image;
  getLog(rover);
}

function moveBackward(rover){
  document.getElementById(rover.x + "-" + rover.y).innerHTML= " ";
  switch (rover.direction) {
    case "W":
      if (rover.x > 10){
        console.log("Turn left or right. The rover could be roam off the map!");
      } else {
        rover.x += 1;
      }
      break;

    case "N":
        if (rover.y > 10){
          console.log("Turn left or right. The rover could be roam off the map!");
        } else {
          rover.y += 1;
        }
      break;

    case "S":
        if (rover.y == 0){
          console.log("Turn left or right. The rover could be roam off the map!");
        } else {
          rover.y -= 1;
        }
      break;

    case "E":
      if (rover.x == 0){
        console.log("Turn left or right. The rover could be roam off the map!");
      } else {
        rover.x -= 1;
      }
      break;                      
  }  
  console.log("The Rover's coordinates are: " + rover.x + "," + rover.y + " and it's pointing to the " + rover.fullDirection);
  console.log("=====");
  
  document.getElementById(rover.x + "-" + rover.y).innerHTML= rover.image;
  getLog(rover);
}

function commands(letters) {
  for (i=0; i<letters.length ;i++){
    switch (letters.charAt(i)){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);        
        break; 
      case "b":
        moveBackward(rover);
        break;   
    }
  }
}

function getLog(rover){
    rover.travelLog.push("(" + rover.x + ", " + rover.y +")" );
}

