import { useContext, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import tickIcon from "../../assets/tick-circleBody.svg";
import DataContext from "../Context/dataContext";
import BodyBg from "./bodyBg";
import "./form.css";

const Vision = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedBalance } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index, balance) => {
    setSelectedOption(index);
    setSelectedBalance(balance);
    setTimeout(() => {
      navigate("/ideal");
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
              <ProgressBar now={20} />
              <div className="__select">
                Define your vision. What does success look like for your
                business in the next year?{" "}
              </div>
              <div className="__select__options">
                {[
                  "More Qualified Leads",
                  "More Qualified Appointments",
                  "Better Systems and Sales Pipeline Management",
                  "Leverage Our Artificial Intelligence Sales Reps",
                  "Increased Brand Awareness",

                  "Higher Conversion Rates",
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
            <ProgressBar now={20} />
            <div className="__select">
              Define your vision. What does success look like for your business
              in the next year?{" "}
            </div>
            <div className="__select__options">
              {[
                "More Qualified Leads",
                "More Qualified Appointments",
                "Better Systems and Sales Pipeline Management",
                "Leverage Our Artificial Intelligence Sales Reps",
                "Increased Brand Awareness",

                "Higher Conversion Rates",
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

export default Vision;
