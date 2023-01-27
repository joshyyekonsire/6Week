// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

let space = " ";

let star = "*";

let lineBreak = "\n";

function makeTree(num) {
  let tree = "";

  for (let i = 0; i < num; i++) {
    tree += space.repeat(num - i - 1);
    tree += star.repeat(i * 2 + 1);
    tree += lineBreak;
  }

  console.log(tree);
}

makeTree(10);
