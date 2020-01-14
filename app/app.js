const application = require("tns-core-modules/application");
const config = require("./config");
const MapAPI = config.google.map.provideAPIKey || "AIzaSyCW9gWe6oddduQtkscKWP2Z_Yb7tagvZr4";
const firebase = require("nativescript-plugin-firebase/app");

// Google Maps SDK API KEY
if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
}

firebase.initializeApp({
  iOSEmulatorFlush: true,
  persist: false
}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

application.run({ moduleName: "app-root" });
