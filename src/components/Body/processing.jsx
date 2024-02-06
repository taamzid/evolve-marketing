import { useContext, useEffect, useState } from "react";
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import RamonakProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import BodyBg from "./bodyBg";
import checkIcon from "../../assets/check-lg.svg";
import refreshIcon from "../../assets/refresh.svg";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/dataContext";

const Processing = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const { selectedBalance } = useContext(DataContext);
  const navigate = useNavigate();
  const completedOne = 100;

  const [allProcessesCompleted, setAllProcessesCompleted] = useState(false);
  const [progressBars, setProgressBars] = useState([
    { label: "Reviewing answers", completed: 0, showCheckIcon: false },
    {
      label: "Analysing Details",
      completed: 0,
      showCheckIcon: false,
    },
    { label: "Calculating eligibility", completed: 0, showCheckIcon: false },
  ]);

  useEffect(() => {
    const timeoutIds = [];

    progressBars.forEach((bar, index) => {
      timeoutIds.push(
        setTimeout(() => {
          setProgressBars((prevProgressBars) =>
            prevProgressBars.map((prevBar, prevIndex) =>
              prevIndex === index
                ? { ...prevBar, completed: completedOne }
                : prevBar
            )
          );

          setTimeout(() => {
            setProgressBars((prevProgressBars) =>
              prevProgressBars.map((prevBar, prevIndex) =>
                prevIndex === index
                  ? { ...prevBar, showCheckIcon: true }
                  : prevBar
              )
            );

            if (index === progressBars.length - 1) {
              setAllProcessesCompleted(true);
            }
          }, 5000);
        }, index * 4500)
      );
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    if (allProcessesCompleted) {
      setTimeout(() => {
        if (
          selectedBalance === "$0 - $49,000" ||
          selectedBalance === "$50,000 - $99,000"
        ) {
          window.location.href = "https://pw.vastion.com.au/thank-you";
        } else {
          navigate("/name");
        }
      }, 200);
    }
  }, [allProcessesCompleted, navigate, selectedBalance]);

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
          </div>
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={90} />
            <div className="__select">Processing Your Eligibility</div>
            <div style={{ marginBottom: "40px" }}></div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                gap: "25px",
              }}
            >
              {progressBars.map((bar, index) => (
                <div key={index} className="__processBar">
                  <div>{bar.label}</div>
                  <div className="__barIcon">
                    <div>
                      <RamonakProgressBar
                        completed={bar.completed}
                        transitionDuration="5s"
                        isLabelVisible={false}
                        animateOnRender={true}
                        bgColor="#507B1C"
                        baseBgColor="rgba(56, 85, 60, 0.20)"
                        height="5px"
                        width="290px"
                      />
                    </div>
                    {!bar.showCheckIcon && (
                      <img
                        src={refreshIcon}
                        alt="refreshIcon"
                        className="rotate"
                      />
                    )}
                    {bar.showCheckIcon && (
                      <img src={checkIcon} alt="checkIcon" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="__next" style={{ marginTop: "50px" }}>
              {allProcessesCompleted ? "Done" : "Processing..."}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={90} />
            <div className="__select">Processing Your Eligibility</div>
            <div style={{ marginBottom: "40px" }}></div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                gap: "25px",
              }}
            >
              {progressBars.map((bar, index) => (
                <div key={index} className="__processBar">
                  <div>{bar.label}</div>
                  <div className="__barIcon">
                    <div>
                      <RamonakProgressBar
                        completed={bar.completed}
                        transitionDuration="5s"
                        isLabelVisible={false}
                        animateOnRender={true}
                        bgColor="#507B1C"
                        baseBgColor="rgba(56, 85, 60, 0.20)"
                        height="5px"
                        width="244px"
                      />
                    </div>
                    {!bar.showCheckIcon && (
                      <img
                        src={refreshIcon}
                        alt="refreshIcon"
                        className="rotate"
                      />
                    )}
                    {bar.showCheckIcon && (
                      <img src={checkIcon} alt="checkIcon" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="__next" style={{ marginTop: "50px" }}>
              {allProcessesCompleted ? "Done" : "Processing..."}
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Processing;
