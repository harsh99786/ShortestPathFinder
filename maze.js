    // Get the grid and create the robot element
    const grid = document.getElementById('grid');
    const robot = document.createElement('div');
    robot.classList.add('robot');
    robot.innerText = 'R';

    // Set the robot's initial position to the top left corner of the grid
    let position = { x: 0, y: 0 };
    grid.children[position.y * 5 + position.x].appendChild(robot);

    // Function to move the robot based on an instruction
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

// Function to run the sequence of instructions
function runInstructions() {
  // const instructions = document.getElementById('instructions').value.split(',');
  // console.log(instructions.value);
  // instructions.forEach((instruction) => {
  //   moveRobot(instruction.trim());
  // });
  var res = "RDRDRDLLU";
  for(let i = 0 ; i<res.length;i++){
      console.log(res[i]);
      setTimeout(function() {
moveRobot(res[i]);
}, 1000*(i+1));
  }


}