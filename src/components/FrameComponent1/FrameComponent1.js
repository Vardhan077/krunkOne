import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="popular-tags-for-handbag-parent">
      <div className="popular-tags-for">Popular tags for handbag</div>
      <div className="frame-parent3">
        <div className="frame-parent4">
          <div className="frame-wrapper">
            <div className="clutch-wrapper">
              <div className="clutch">Clutch</div>
            </div>
          </div>
          <button className="frame-button">
            <div className="fabric-lining-wrapper">
              <div className="fabric-lining">Fabric lining</div>
            </div>
          </button>
          <div className="frame-wrapper1">
            <div className="baggit-wrapper">
              <div className="baggit">{`Baggit `}</div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="multi-compartment-wrapper">
              <div className="multi-compartment">Multi Compartment</div>
            </div>
          </div>
        </div>
        <div className="chevron-right-wrapper">
          <img
            className="chevron-right-icon"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
