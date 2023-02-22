// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// 指定したデータが正しいかtrue or falseで判定してくれる

const ryutizm = "ryutizm";
const pyonth = "pyonth";
const regex = RegExp("ryu*")

// console.log(regex.test(ryutizm));
// console.log(regex.test(pyonth));
// console.log(/pyon*/.test(pyonth));

const isRyu = regex.test(pyonth)

if (isRyu) {
  console.log("私はryutizmです。")
} else {
  console.log("私はryutizmではありません。")
}