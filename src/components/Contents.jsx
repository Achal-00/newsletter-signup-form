const Contents = (props) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function emailHandler() {
    if (props.email === "" || !props.email.match(validRegex)) {
      document.querySelector(".signup-section input").style.border =
        "thin solid var(--tomato)";
      document.querySelector(".input-holder p:nth-child(2)").style.display =
        "block";
    } else {
      document.querySelector(".signup-section input").style.border =
        "thin solid green";
      document.querySelector(".input-holder p:nth-child(2)").style.display =
        "none";
      props.visibility((prev) => !prev);
    }
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      <div className="list-section">
        <div className="list-item">
          <div className="list-image-holder">
            <img src="icon-list.svg" alt="list icon" />
          </div>
          <p>Product discovery and building what matters</p>
        </div>
        <div className="list-item">
          <div className="list-image-holder">
            <img src="icon-list.svg" alt="list icon" />
          </div>
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="list-item">
          <div className="list-image-holder">
            <img src="icon-list.svg" alt="list icon" />
          </div>
          <p>And much more!</p>
        </div>
      </div>
      <div className="signup-section">
        <div className="input-holder">
          <p>Email address</p>
          <p>Valid email required</p>
          <input
            type="email"
            placeholder="email@company.com"
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </div>
        <button onClick={emailHandler}>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
};

export default Contents;
