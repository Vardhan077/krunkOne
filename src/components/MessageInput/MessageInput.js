import "./MessageInput.css";

const MessageInput = () => {
  return (
    <div className="message-input">
      <footer className="type-your-message-parent">
        <div className="type-your-message">
          <input
            className="type-your-message1"
            placeholder="Type your message"
            type="text"
          />
          <img className="paperclip-icon" alt="" src="/paperclip.svg" />
        </div>
        <div className="bags-on-timpu">
          <img
            className="products-listing-icon"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </footer>
      <div className="set-filter-button">
        <div className="powered-by-parent">
          <div className="powered-by">{`Powered by `}</div>
          <div className="krunkai">Krunk.ai</div>
          <div className="clutch-bag-tag">
            <img
              className="logo-icon"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dg9itycrz/image/upload/v1712842054/frame-5591_2x_ssbv1u.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
