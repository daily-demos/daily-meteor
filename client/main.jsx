import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

const waitForCameraAuthorization = () => {
  cordova.plugins.diagnostic.isCameraAuthorized(
    (authorized) => {
      if (!authorized) {
        cordova.plugins.diagnostic.requestCameraAuthorization(
          (granted) => waitForMicAuthorization(),
          (error) => waitForCameraAuthorization()
        );
      } else {
        waitForMicAuthorization();
      }
    },
    (error) => {
      console.error(error);
    }
  );
};

const waitForMicAuthorization = () => {
  cordova.plugins.diagnostic.isMicrophoneAuthorized(
    (authorized) => {
      if (!authorized) {
        cordova.plugins.diagnostic.requestMicrophoneAuthorization(
          (granted) => startApp(),
          (error) => waitForMicAuthorization()
        );
      } else {
        startApp();
      }
    },
    (error) => {
      console.error(error);
    }
  );
};

const startApp = () => {
  render(<App />, document.getElementById("react-target"));
};

if (Meteor.isCordova) {
  // Wait for deviceready
  Meteor.startup(function () {
    waitForCameraAuthorization();
  });
}
