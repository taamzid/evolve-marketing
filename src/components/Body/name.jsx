import { useContext, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
// import arrowImage from "../../assets/arrowIcon.svg";
import DataContext from "../Context/dataContext";
import BodyBg from "./bodyBg";
import "./form.css";

const Name = () => {
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
        navigate("/vision");
      }
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
              <ProgressBar variant="bar-color" now={0} />
              <div className="__almost">
                Final Step! <br />
                Who Should We Personalise This Review For?
              </div>
              <div className="__age__input">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
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
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar variant="bar-color" now={0} />
            <div className="__almost">
              <div>
                Embark on a journey of transformation in your business with us.
                Firstly...
              </div>
              <div>
                let's start with your name! We look forward to navigating the
                path to success
              </div>
              <div>together.</div>
            </div>
            <div className="__age__input">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
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

export default Name;
