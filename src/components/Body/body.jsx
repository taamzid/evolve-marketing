import "./body.css";
import Form from "./form";
import BodyBg from "./bodyBg";

const Body = () => {
  const isSmallScreen = window.innerWidth <= 767;

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
          </div>
          <Form />
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <Form />
        </div>
      )}
    </>
  );
};

export default Body;
