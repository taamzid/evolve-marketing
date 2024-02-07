import { useContext, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import tickIcon from "../../assets/tick-circleBody.svg";
import DataContext from "../Context/dataContext";
import BodyBg from "./bodyBg";
import "./form.css";

const Method = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedBalance } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index, balance) => {
    setSelectedOption(index);
    setSelectedBalance(balance);
    setTimeout(() => {
      navigate("/balance");
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
              <ProgressBar now={45} />
              <div className="__select">
                What methods are you currently using to get your leads and
                clients?
              </div>
              <div className="__select__options">
                {[
                  "Paid Meta Ads (Facebook & Instagram)",
                  "Paid Google Ads (including YouTube Ads)",
                  "Paid TikTok Ads",
                  "Organic Marketing (FB, Insta, TikTok, YouTube)",
                  "SEO",

                  "Television Ads",
                  "Radio Ads",
                  "Referrals",
                  "Cold Calling",
                  "LinkedIn Ads",
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
            <ProgressBar now={45} />
            <div className="__select">
              What methods are you currently using to get your leads and
              clients?
            </div>
            <div className="__select__options">
              {[
                "Paid Meta Ads (Facebook & Instagram)",
                "Paid Google Ads (including YouTube Ads)",
                "Paid TikTok Ads",
                "Organic Marketing (FB, Insta, TikTok, YouTube)",
                "SEO",

                "Television Ads",
                "Radio Ads",
                "Referrals",
                "Cold Calling",
                "LinkedIn Ads",
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

export default Method;
