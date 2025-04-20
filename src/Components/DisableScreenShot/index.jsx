import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ApplyBlackWithMessage = () => {
  document.documentElement.classList.add("screenshot-detected");
  const messageContainer = document.createElement("div");
  messageContainer.id = "refresh-message";
  messageContainer.style.position = "fixed";
  messageContainer.style.top = "50%";
  messageContainer.style.left = "50%";
  messageContainer.style.transform = "translate(-50%, -50%)";
  messageContainer.style.backgroundColor = "white";
  messageContainer.style.color = "black";
  messageContainer.style.padding = "20px";
  messageContainer.style.borderRadius = "8px";
  messageContainer.style.zIndex = "10000";
  messageContainer.style.textAlign = "center";
  messageContainer.innerHTML = `
        <p>
          This website might have sensitive information. As a security measure, taking screenshots or performing any action above the website screen is not allowed. This is to protect both you and us from potential security threats. Please refresh the page to continue.
        </p>
        <button style="background-color: #4CAF50; color: white; padding: 14px 20px; margin: 8px 0; border: none; cursor: pointer; border-radius: 5px;" onclick="window.location.reload()">Refresh</button>`;
  document.body.appendChild(messageContainer);
};

const usePersistScreenshotBlackout = () => {
  useEffect(() => {
    let isScreenshotDetected = false;
    const handleScreenShotDetection = () => {
      if (!isScreenshotDetected) {
        isScreenshotDetected = true;
        ApplyBlackWithMessage();
      }
    };

    const handleVisiblityChange = () => {
      if (document.visibilityState === "hidden") {
        handleScreenShotDetection();
      }
    };
    window.addEventListener("blur", handleScreenShotDetection);
    document.addEventListener("visibilitychange", handleVisiblityChange);

    return () => {
      window.removeEventListener("blur", handleScreenShotDetection);
      document.removeEventListener("visibilitychange", handleVisiblityChange);
    };
  }, []);
};

export default usePersistScreenshotBlackout;
