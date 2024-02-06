import tickCircle from "../../assets/tick-circle.svg";
// import customers from "../../assets/customers.svg";
// import stars from "../../assets/star-fill.svg";
import "./body.css";

const BodyBg = () => {
  const isSmallScreen = window.innerWidth <= 767;
  return (
    <>
      <div className="__is">
        Is Your Super Fund Maximising <br />
        Your Future?{" "}
      </div>
      <div className="__claim">Take Our Quick Super Review Quiz to Find Out!</div>
      {isSmallScreen ? (
        <>
          {/* <div className="__customers">
            <img src={customers} alt="customers" />
            <div>
              <div className="__stars">
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
              </div>
              <div className="__1275">1275 Satisfied Customer</div>
            </div>
          </div> */}
          <div className="__cnt">
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>Free, Fast Super Check</div>
            </span>
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>Valuable Super Insight</div>
            </span>
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>No Strings, Pure Clarity</div>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="__cnt">
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>Free, Fast Super Check</div>
            </span>
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>Valuable Super Insight</div>
            </span>
            <span className="__compare">
              <img src={tickCircle} alt="tickCircle" />
              <div>No Strings, Pure Clarity</div>
            </span>
          </div>
          {/* <div className="__customers">
            <img src={customers} alt="customers" />
            <div>
              <div className="__stars">
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
              </div>
              <div className="__1275">1275 Satisfied Customer</div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default BodyBg;
