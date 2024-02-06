import { useState } from "react";
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";
import { useNavigate } from "react-router-dom";
import BodyBg from "./bodyBg";

const State = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setTimeout(() => {
      navigate("/concern");
    }, 500);
  };
  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
          </div>
          <div className="__form__body">
            <div style={{ marginTop: "30px" }}></div>
            <ProgressBar animated now={60} />
            <div className="__select">Please Choose Your State</div>
            <div className="__select__options__state">
              {["NSW", "VIC", "QLD", "ACT", "TAS", "SA", "WA", "NT"].map(
                (option, index) => (
                  <div
                    key={index}
                    className={`__options ${
                      selectedOption === index ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    {option}
                    {selectedOption === index && (
                      <img src={tickIcon} alt="tickIcon" />
                    )}
                  </div>
                )
              )}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "30px" }}></div>
            <ProgressBar animated now={60} />
            <div className="__select">Please Choose Your State</div>
            <div className="__select__options__state">
              {["NSW", "VIC", "QLD", "ACT", "TAS", "SA", "WA", "NT"].map(
                (option, index) => (
                  <div
                    key={index}
                    className={`__options ${
                      selectedOption === index ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    {option}
                    {selectedOption === index && (
                      <img src={tickIcon} alt="tickIcon" />
                    )}
                  </div>
                )
              )}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default State;
