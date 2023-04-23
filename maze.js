    const robot = document.createElement('div');
    robot.classList.add('robot');
    robot.innerText = 'R';
    var numItems = 25;
    var grid = document.getElementById("grid");
    var maze = [
      [1, 1, 0, 0, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 1]
    ];
    
    
    for(var i = 0;i < 5;i++)
    {
      for(var j = 0; j < 5; j++){
        var item = document.createElement("div");
        if(maze[i][j] == 0)
        item.className = "grid-item-valid";
        else 
        item.className = "grid-item-inValid";
        grid.appendChild(item);
      }
    }
    let position = { x: 0, y: 0 };
    grid.children[position.y * 5 + position.x].appendChild(robot);
    function moveRobot(instruction) {
  switch (instruction) {
    case 'L':
      if (position.x > 0) {
        // Remove the robot from its current position and append it to the new position
        grid.children[position.y * 5 + position.x].removeChild(robot);
        position.x--;
        grid.children[position.y * 5 + position.x].appendChild(robot);
        // Set the robot's orientation
        robot.className = 'robot left';
      }
      break;
    case 'R':
      if (position.x < 4) {
        // Remove the robot from its current position and append it to the new position
        grid.children[position.y * 5 + position.x].removeChild(robot);
        position.x++;
        grid.children[position.y * 5 + position.x].appendChild(robot);
        // Set the robot's orientation
        robot.className = 'robot right';
      }
      break;
    case 'U':
      if (position.y > 0) {
        // Remove the robot from its current position and append it to the new position
        grid.children[position.y * 5 + position.x].removeChild(robot);
        position.y--;
        grid.children[position.y * 5 + position.x].appendChild(robot);
        // Set the robot's orientation
        robot.className = 'robot up';
      }
      break;
    case 'D':
      if (position.y < 4) {
        // Remove the robot from its current position and append it to the new position
        grid.children[position.y * 5 + position.x].removeChild(robot);
        position.y++;
        grid.children[position.y * 5 + position.x].appendChild(robot);
        // Set the robot's orientation
        robot.className = 'robot down';
      }
      break;
  }
}

function runInstructions() {
  var res = "RDRDDRRD";
  for(let i = 0 ; i<res.length;i++){
      console.log(res[i]);
      setTimeout(function() {
moveRobot(res[i]);
}, 1000*(i+1));
  }
}