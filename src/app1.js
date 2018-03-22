// Notice how we are importing the { add } utility in app2
import { add } from "./utility";

function app1() {
  console.log("This is app1");
  console.log(add(5, 10));
}

app1();

// Do a code split for the code in app2
import(/* webpackChunkName: "app2" */ "./app2").then(app2 => {
  app2.default();
});
