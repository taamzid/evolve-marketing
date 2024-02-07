import { useContext, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import tickIcon from "../../assets/tick-circleBody.svg";
import DataContext from "../Context/dataContext";
import BodyBg from "./bodyBg";
import "./form.css";

const Balance = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedBalance } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index, balance) => {
    setSelectedOption(index);
    setSelectedBalance(balance);
    setTimeout(() => {
      navigate("/website");
    }, 500);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
            <div className="__form__body">
              <div style={{ marginTop: "20px" }}></div>
              <ProgressBar now={55} />
              <div className="__select">
                So you want to grow your business... What is your monthly
                marketing budget?{" "}
              </div>
              <div className="__select__options">
                {[
                  "$1000 - $2,000",
                  "$2000 - $5000",
                  "$5000 - $10000",
                  "$10000- $20000",
                  "$20000 - $40000",
                  "$40000+",
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
              {/* <img src={arrowImage} alt="arrowImage" className="__arrowIcon" /> */}
            </div>
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar now={55} />
            <div className="__select">
              So you want to grow your business... What is your monthly
              marketing budget?{" "}
            </div>
            <div className="__select__options">
              {[
                "$1000 - $2,000",
                "$2000 - $5000",
                "$5000 - $10000",
                "$10000- $20000",
                "$20000 - $40000",
                "$40000+",
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
            {/* <img src={arrowImage} alt="arrowImage" className="__arrowIcon" /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Balance;
