import { PersonFill, LockFill } from "react-bootstrap-icons";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Login() {
  return (
    <div className="login">
      <Dashboardhead />

      <div className="d-flex align-items-center justify-content-center mainpagehead ">
        <div className="signup-body "></div>
        <div className="oo col-lg-9  col-11"></div>

        <div className="back col-lg-9  col-11">
          <form className="form-body">
            <div className="d-flex align-items-center w-100">
              <div className="form-img">
                <img
                  className="img-fluid"
                  src={require("../../../asset/sample1/login.png")}
                ></img>
              </div>

              <div className=" form-content ">
                <h2 className="mt-lg-3 mt-md-3 mt-0">𝐋𝐎𝐆𝐈𝐍</h2>

                <div className="input-div">
                  <i>
                    <PersonFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="Name , Email , Number"
                    type="text"
                  />
                  <span className="bar"></span>
                </div>

                <div className="input-div">
                  <i>
                    <LockFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="Password"
                    type="password"
                  />
                  <span className="bar"></span>
                </div>

                <div className="col-12 mt-lg-5 md-mt-5 mt-4 d-flex justify-content-center">
                  <button className="button col-lg-4 col-md-4 col-6" type="submit">
                    Submit
                  </button>
                </div>
                <p className="mt-lg-4 mt-md-4 mt-sm-4 mt-1 text-dark">I am already a member</p>
                <a className="text-decoration-none text-dark fs-5 " href="#">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Dashboardfooter /> */}
    </div>
  );
}
