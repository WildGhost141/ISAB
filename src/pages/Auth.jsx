import { useContext } from "react";
import "../assets/css/pages/auth.css";

import talent1 from "../assets/img/talents/landingmodel.png";
import talent2 from "../assets/img/talents/landingmodel2.png";
import { PopupContext } from "../providers/PopupProvider";
import RegisterPopup from "../popups/RegisterPopup";
import LoginPopup from "../popups/LoginPopup";

function Auth() {
  const { popup, setPopup } = useContext(PopupContext);

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
              <div>
                <h1>WHO WILL YOU BE JOINING AS?</h1>
                <div>
                  <button
                    className="h-prim"
                    onClick={(e) =>
                      setPopup({
                        title: "Create your new account",
                        elements: (
                          <RegisterPopup params={{ type: "student" }} />
                        ),
                      })
                    }
                  >
                    I'M A STUDENT
                  </button>
                  <button
                    className="h-prim"
                    onClick={(e) =>
                      setPopup({
                        title: "Create your new account",
                        elements: (
                          <RegisterPopup params={{ type: "employer" }} />
                        ),
                      })
                    }
                  >
                    I'M AN EMPLOYER
                  </button>
                </div>
              </div>

              <p>
                Already have an account?{" "}
                <b
                  onClick={() =>
                    setPopup({
                      title: "Log in to your account",
                      elements: <LoginPopup params={{ type: "student" }} />,
                    })
                  }
                >
                  Log In!
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;
