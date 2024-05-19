const byteSize = (str) => {
  // write your coconst byteSize = (str) => {
  // Create a Blob object with the input string
  const blob = new Blob([str]);
  // Return the size of the Blob, which represents the byte size of the string
  return blob.size;
};

// 
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
