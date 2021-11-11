import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@descomplica/dashboard",
  app: () => System.import("@descomplica/dashboard"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
