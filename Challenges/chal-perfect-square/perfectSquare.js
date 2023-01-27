function nextSquare(square) {
  console.log("    SQUARE ROOT");
  console.log("---------------------");
  if (Math.sqrt(square) === Math.round(Math.sqrt(square))) {
    let squareRoot = Math.sqrt(square);
    console.log(`${square} is a square`);
    console.log(`The square root of ${square} is ${squareRoot}`);
    console.log("The next square number is: ");
    console.log((Math.sqrt(square) + 1) ** 2);
  } else {
    console.log(`${square} is not a square`);
  }
}

function nextCube(cube) {
  console.log("     CUBE ROOT");
  console.log("---------------------");
  if (Math.cbrt(cube) === Math.round(Math.cbrt(cube))) {
    let cubeRoot = Math.cbrt(cube);
    console.log(`${cube} is a cube`);
    console.log(`The cube root of ${cube} is ${cubeRoot}`);
    console.log("The next cube number is: ");
    console.log((Math.cbrt(cube) + 1) ** 3);
  } else {
    console.log(`${cube} is not a cube`);
  }
}


nextSquare(64);
nextCube(8);
