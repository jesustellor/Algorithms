//1.) One possible solution
function reversed(string) {
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    reversed += string[i];
    //reversed = string[i] + reversed;
  }
  return reversed;
}

console.log(reversed("jesus"));

//2.) Another possible solution
function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverse("jesus"));

//3.) Another possible solution
function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse2("jesus"));

// let listNames = ["jesus", "andres", "jenny"]
// function reverse(str){
//     string = String(str);
//     let reversed = string.split('').reverse().join('');
//     console.log(parseInt(reversed) * Math.sign(str));
// }

// reverse(-25);
