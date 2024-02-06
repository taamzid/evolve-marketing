/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import { useContext, useState } from "react";
import BodyBg from "./bodyBg";
import DataContext from "../Context/dataContext";

const Email = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const { selectedName, selectedLastName } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+61");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email can not be empty.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateContact = () => {
    const contactRegex = /^(\+\d{1,2}\s?)?(\d{1,4}\s?)?\d{4}\s?\d{4}$/;
    if (!contactRegex.test(contact)) {
      setContactError("Please enter a valid Australian phone number.");
      return false;
    }
    setContactError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail() || !validateContact()) {
      return;
    }

    const fullContact = contact.startsWith("+")
      ? contact
      : countryCode + contact;

    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IlNyNmJQM0ZXNU5DRmZBQWl6VndjIiwiY29tcGFueV9pZCI6IlJzc2N1RzVsOXZtaVpsRnFxSjdRIiwidmVyc2lvbiI6MSwiaWF0IjoxNzAxMTcxODg3ODI4LCJzdWIiOiJ1c2VyX2lkIn0.xioW50-Ja4sW_uW590MxN6VHVBCsaznDHg20OurFOiM";
    const ghlApiEndpoint =
      "https://services.leadconnectorhq.com/hooks/Sr6bP3FW5NCFfAAizVwc/webhook-trigger/93a052e2-3f7c-4691-9545-22b4cbf0ec95";

    const formData = {
      email,
      contact: fullContact,
      first_name: selectedLastName,
      last_name: selectedName,
    };

    try {
      const response = await fetch(ghlApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("GHL API Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }

    window.location.href = "https://pw.vastion.com.au/one-last-step";
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
          </div>
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={100} />
            <div className="__almost">
              Thanks {selectedLastName}!
              <br />
              Let's Arrange the Best Way to Deliver Your Personalised Review.
            </div>

            <div className="__age__input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Best Email..."
                className="__input"
              />
            </div>
            {emailError && <div className="__error__message">{emailError}</div>}
            <div className="__age__input">
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={`(${countryCode}) Enter Your Mobile`}
                className="__input"
              />
            </div>
            {contactError && (
              <div className="__error__message">{contactError}</div>
            )}
            <br />
            <button className="__next" type="submit">
              Next
            </button>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={100} />
            <div className="__almost">
              Thanks {selectedLastName}!
              <br />
              Let's Arrange the Best Way to Deliver Your Personalised Review.
            </div>

            <div className="__age__input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Best Email..."
                className="__input"
              />
            </div>
            {emailError && <div className="__error__message">{emailError}</div>}
            <div className="__age__input">
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={`(${countryCode}) Enter Your Mobile`}
                className="__input"
              />
            </div>
            {contactError && (
              <div className="__error__message">{contactError}</div>
            )}
            <br />
            <br />
            <button className="__next" type="submit">
              Next
            </button>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </form>
  );
};

export default Email;
