/* eslint-disable react/no-unescaped-entities */
import "./form.css";
import processFailed from "../../assets/failedIcon.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProcessFailed = () => {
  function ScrollToTopOnPageChange() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTopOnPageChange />
      <div className="__form__body__failed">
        <div className="__process__failed">
          <img src={processFailed} alt="processFailed" />
        </div>
        <div>
          <div className="__sorry">
            Sorry, <br /> You did not qualify.
          </div>
          <div className="__unfortunately">
            Unfortunately, we're not able to help you at this time. This may be
            due to restrictions on our third party <br />
            partner's ability to provide suitable and relevant information for
            your circumstances.
          </div>
          <div className="__some">
            <div className="__alternative">
              Some alternative options may be to:
            </div>
            <div className="__speak">
              1. Speak directly with your existing super fund <br />
              2. Seek qualified financial advice for yourself{" "}
              <span style={{ color: "#507B1C" }}>Click here</span>
              <br />
              3. You can access more information about superannuation here{" "}
              <span style={{ color: "#507B1C" }}>Click here</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessFailed;
