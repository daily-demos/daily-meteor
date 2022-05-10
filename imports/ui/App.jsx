import React, { useEffect } from "react";
import DailyIframe from "@daily-co/daily-js";

export function App() {
  useEffect(() => {
    const frame = DailyIframe.createFrame({
      showLeaveButton: true,
      showFullscreenButton: true,
      iframeStyle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
    });
    frame.join({ url: "https://filipi.daily.co/public" });
  }, []);

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
    </div>
  );
}
