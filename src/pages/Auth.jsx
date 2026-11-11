import "../assets/css/pages/auth.css";

import talent1 from "../assets/img/talents/landingmodel.png";
import talent2 from "../assets/img/talents/landingmodel2.png";

function Auth() {
  return (
    <>
      <section className="page-container auth-parent">
        <div className="banner-join">
          <div>
            <div>
              <h2 className="main-text">FIND THE MOST FLEXIBLE GIGS</h2>
              <h1 className="main-text bottom">JOIN ISAB</h1>
            </div>
            <div className="tagline-img-container">
              <img src={talent1} />
              <div className="bg-box"></div>
            </div>
          </div>
        </div>
        <div className="banner-join second">
          <div>
            <div className="tagline-img-container">
              <img src={talent2} />
              <div className="bg-box"></div>
            </div>
            <div className="cta-container">
              {/* Gap */}
              <div
                style={{
                  width: "100%",
                  height: "0",
                  flexBasis: "0",
                  flexGrow: "1",
                }}
              ></div>

              <h1>WHO WILL YOU BE JOINING AS?</h1>
              <div>
                <button className="h-prim">I'M A STUDENT</button>
                <button className="h-prim">I'M AN EMPLOYER</button>
              </div>

              {/* Gap */}
              <div
                style={{
                  width: "100%",
                  height: "0",
                  flexBasis: "0",
                  flexGrow: "1",
                }}
              ></div>

              <p>
                Already have an account? <b>Log In!</b>
              </p>

              {/* Gap */}
              <div
                style={{
                  width: "100%",
                  height: "0",
                  flexBasis: "0",
                  flexGrow: "1",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;
