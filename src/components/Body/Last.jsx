import { useContext, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import arrowImage from "../../assets/arrowIcon.svg";
import DataContext from "../Context/dataContext";
import BodyBg from "./bodyBg";
import "./form.css";

const Last = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedName, setSelectedLastName } = useContext(DataContext);
  const [lastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isBlank, setIsBlank] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);

  const handleDropdownOptionClick = () => {
    setSelectedName(lastName);
    setSelectedLastName(firstName);
    setTimeout(() => {
      if (firstName.trim() === "") {
        setIsBlank(true);
        setIsValid(false);
        return;
      }
      if (!isAlpha(firstName)) {
        setIsValid(true);
        setIsBlank(false);
      } else {
        setIsBlank(false);
        setIsValid(false);
        navigate("/awesome");
      }
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
            <ProgressBar animated now={85} />
            <div className="__almost">
              <h1>One Last Question...</h1>
              <p>
                At Evolve Marketing Strategists, we're very selective about who
                we choose to work with. What is the Number #1 reason we should
                help grow your business over any of your competitors?
              </p>
            </div>
            <div className="__age__input">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
                className="__input"
              />
            </div>
            {/* <div className="__age__input">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="__input"
              />
            </div> */}
            {isValid && (
              <div className="__error__message">Please input valid name.</div>
            )}
            {isBlank && (
              <div className="__error__message">Name can not be empty.</div>
            )}
            <br />
            <div className="__next" onClick={handleDropdownOptionClick}>
              Next
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={85} />
            <div className="__almost">
              <h1>One Last Question...</h1>
              <p>
                At Evolve Marketing Strategists, we're very selective about who
                we choose to work with. What is the Number #1 reason we should
                help grow your business over any of your competitors?
              </p>
            </div>
            <div className="__age__input">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
                className="__input"
              />
            </div>
            {/* <div className="__age__input">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="__input"
              />
            </div> */}
            {isValid && (
              <div className="__error__message">Please input valid name.</div>
            )}
            {isBlank && (
              <div className="__error__message">Name can not be empty.</div>
            )}
            <br />

            <div className="__next" onClick={handleDropdownOptionClick}>
              Next
            </div>
            {/* <img src={arrowImage} alt="arrowImage" className="__arrowIcon" /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Last;
