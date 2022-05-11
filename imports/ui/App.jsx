import React, { useEffect } from "react";
import DailyIframe from "@daily-co/daily-js";

export function App() {
  const url = "";
  //const url = "https://YOUR_DOMAIN.daily.co/ROOM";

  useEffect(() => {
    if (!url) {
      return;
    }
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
    frame.join({ url });
  }, []);

  return (
    <div>
      Edit the file <b>imports/ui/App.tsx</b> to insert your meeting URL!
    </div>
  );
}
