import React, { useState, useEffect } from "react";

// export default function BackTopButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 30) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     });
//   }, []);
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };

//   return (
//     <>
//       {visible && (
//         <button
//           type="button"
//           className="btn btn-floating btn-lg grad-bg"
//           id="btn-back-to-top"
//           onClick={scrollToTop}
//         >
//           HELLO
//           <i className="fas fa-arrow-up"></i>
//         </button>
//       )}
//     </>
//   );
// }

// const back2Top = document.getElementById("btn-back-to-top");

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     back2Top.style.display = "block";
//   } else {
//     back2Top.style.display = "none";
//   }
// }

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

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
