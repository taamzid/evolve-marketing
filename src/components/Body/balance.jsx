import { useContext, useState } from "react";
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";
import { useNavigate } from "react-router-dom";
import BodyBg from "./bodyBg";
import DataContext from "../Context/dataContext";

const Balance = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedBalance } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index, balance) => {
    setSelectedOption(index);
    setSelectedBalance(balance);
    setTimeout(() => {
      navigate("/age");
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
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={30} />
            <div className="__select">
              What's Your Current Super Balance Estimate?
            </div>
            <div className="__select__options">
              {[
                "$0 - $49,000",
                "$50,000 - $99,000",
                "$100,000 - $149,000",
                "$150,000 - $249,000",
                "$250,000 - $499,000",
                "$500,000 +",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`__options__balance ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index, option)}
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
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={30} />
            <div className="__select">
              What's Your Current Super Balance Estimate?
            </div>
            <div className="__select__options">
              {[
                "$0 - $49,000",
                "$50,000 - $99,000",
                "$100,000 - $149,000",
                "$150,000 - $249,000",
                "$250,000 - $499,000",
                "$500,000 +",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`__options__balance ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index, option)}
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

export default Balance;
