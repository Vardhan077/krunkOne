// import KrunkContainer from "../components/KrunkContainer";
// import FrameComponent1 from "../components/FrameComponent1";
// import FrameComponent from "../components/FrameComponent";
// import MessageInput from "../components/MessageInput";
// import "./Krunk.css";

import KrunkContainer from "../components/KrunkContainer/KrunkContainer";
import FrameComponent from "../components/FrameComponent/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1/FrameComponent1";
import MessageInput from "../components/MessageInput/MessageInput";
import "./Krunk.css"

const Krunk = () => {
  return (
    <div className="krunk">
      <KrunkContainer />
      <main className="krunk-inner">
        <section className="frame-parent">
          <div className="frame-group">
            <div className="hi-sam-i-am-your-personal-sho-wrapper">
              <div className="hi-sam-i">
                Hi Sam! I am your personal shopping assistant , how can i help
                you today ?
              </div>
            </div>
            <div className="pm-wrapper">
              <div className="pm">4:45 PM</div>
            </div>
          </div>
          <div className="frame-container">
            <div className="i-am-looking-for-a-hand-bag-w-wrapper">
              <div className="i-am-looking">
                I am looking for a hand bag, with long strap .
              </div>
            </div>
            <div className="pm-container">
              <div className="pm1">4:46 PM</div>
            </div>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
      <MessageInput />
    </div>
  );
};

export default Krunk;
