const { formatTitle, shortenBio, convertLength } = require("./public/utils");

let testData = {
  id: 1,
  firstName: "Patten",
  lastName: "Goforth",
  bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  datetime: "2022-03-14 8:00:00",
  title: "nulla ac",
  length: 65,
  floor: 5,
  roomNumber: 3,
};

test("test should run and the number 2 should equal 2", () => {
  expect(2).toBe(2);
});


test('first name should be Patten', () => {
expect(testData.firstName).toBe('Patten')

})

test('first letters of words should be capitalized', () => {
let finalTitle = formatTitle(testData.title);
expect(finalTitle).toBe("Nulla Ac")
});


test('first letters of words should be capitalized', () => {
  let finalTitle = formatTitle(testData.title);
  expect(finalTitle).not.toBe("nulla Ac")
  });