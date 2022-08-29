// This is needed for webpack to bundle and process the css
import "./main.scss";
import init, { greet } from "../main-wasm/pkg/main_wasm.js";

document.getElementById("me").innerHTML = "Yesss 2 new";

init().then(function () {
  greet();
});

console.log("run");
