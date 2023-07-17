import React, { useState, useEffect } from "react";
import { createPopper } from "@popperjs/core";

const App = () => {
  const [popupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    const togglePopup = () => {
      setPopupVisible((prevVisible) => !prevVisible);
    };

    const popupInterval = setInterval(togglePopup, 2 * 60 * 1000 + 30 * 1000);
    return () => clearInterval(popupInterval);
  }, []);

  useEffect(() => {
    if (popupVisible) {
      const reference = document.getElementById("popup-button");
      const popper = document.getElementById("popup-content");
      createPopper(reference, popper, {
        placement: "top-end",
      });
    }
  }, [popupVisible]);

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#282c34",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#fff" }}>Kitchen</h1>
      </div>
      <div style={{ textAlign: "right" }}>
        <button
          id="popup-button"
          style={{
            visibility: "hidden",
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Click Me
        </button>
        {popupVisible && (
          <div
            id="popup-content"
            style={{
              backgroundColor: "lightcoral",
              padding: "10px",
              borderRadius: "5px",
              color: "#fff",
              maxWidth: "200px", 
            }}
          >
            <h2 style={{ margin: "0 0 10px" }}>Alert Message</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "5px" }}>Hamburger</li>
              <li style={{ marginBottom: "5px" }}>Wings</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
