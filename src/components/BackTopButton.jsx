import React, { useState, useEffect } from "react";

export default function BackTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {visible && (
        <button
          className="btn btn-floating btn-lg grad-bg"
          id="btn-back-to-top"
          onClick={backToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
