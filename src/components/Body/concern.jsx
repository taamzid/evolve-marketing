import { useState } from "react";
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";
import { useNavigate } from "react-router-dom";
import BodyBg from "./bodyBg";

const Concern = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setTimeout(() => {
      navigate("/processing");
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
            <div style={{ marginTop: "10px" }}></div>
            <ProgressBar animated now={75} />
            <div className="__select__concern">
              What Worries You Most About Your Superannuation?
            </div>
            <div className="__select__options__concern">
              {[
                "Unsure About Fund's Performance?",
                "Have I Got Lost Super?",
                "Concerned About High Fees?",
                "All of These Resonate with Me",
              ].map((option, index) => (
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
              ))}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "10px" }}></div>
            <ProgressBar animated now={75} />
            <div className="__select__concern">
              What Worries You Most About Your Superannuation?
            </div>
            <div className="__select__options__concern">
              {[
                "Unsure About Fund's Performance?",
                "Have I Got Lost Super?",
                "Concerned About High Fees?",
                "All of These Resonate with Me",
              ].map((option, index) => (
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
              ))}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Concern;
