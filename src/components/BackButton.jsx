import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="col col-lg-6">
      <button
        className="back-link"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa-solid fa-arrow-left-long"></i>Go Back
      </button>
    </div>
  );
}
