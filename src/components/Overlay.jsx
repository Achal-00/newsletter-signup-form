const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="overlay-image-holder">
        <img src="icon-success.svg" alt="success icon" />
      </div>
      <div className="overlay-header">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{props.email}</span>.
          Please open it and click the button inside to confirm your
          subscription
        </p>
      </div>
      <button onClick={() => props.visibility((prev) => !prev)}>
        Dismiss message
      </button>
    </div>
  );
};

export default Overlay;
