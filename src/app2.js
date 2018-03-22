// Notice how we are importing the { add } utility in app2
import { add } from "./utility";

function app2() {
  console.log("This is app2");
  console.log(add(2, 42));
}

export default app2;
