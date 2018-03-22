# Demo

This is a demo to show how Webpack handles code splitting. In particular, are dependencies duplicated when they are imported multiple times (even across code splits)?

In this example, we have `app1` which imports a `utility` function. `app1` also dynamically imports `app2` (and causes a code split).

`app2` imports the same `utility` function that `app1` imports.

# Getting started

```shell
npm install
# Download dependencies

npm run build
# Run webpack and opens a webpage
```

* When the webpage opens, look at the `Network` tab in your devtools. Notice how the code split bundle is loaded after the main bundle.
* Look at the `/dist` directory, and open the main bundle named `main.bundle.js`.
  * Look at the code, and notice how the `utility` function is included here.
* Look at the `/dist` directory, and open the code split bundle named `app2.codesplitBundle.js`.
  * Look at the code, and notice how the `utility` function is not included here. Only a reference of it is included.
