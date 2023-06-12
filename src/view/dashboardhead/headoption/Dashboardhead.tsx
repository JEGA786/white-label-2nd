import "./Dashboardhead.styles.css";
import { List, XCircleFill } from "react-bootstrap-icons";
import React from "react";

export function Headeroption(props: any) {
  return (
    <li className={props.footerli}>
      <a className={props.foota} href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.Headeroption}</span>
      </a>
    </li>
  );
}

export function Dashboardhead() {
  return (
    <div className="header fixed-top " style={{ height: "75px" }}>
      <nav className="navbar navbar-expand-md col-lg-10   mx-auto  p-0">
        <div className="col d-flex align-items-center justify-content-between  px-0">
          <a className="head-logo " href="/">
            <img
              src={require("../../../asset/payoff logo.png")}
              alt="payoff logo"
              className="logo-circle"
            />
          </a>
          <a
            className="navbar-toggler border-0 mt-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fs-1 text-dark mx-4">
              <List />
            </i>
          </a>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <a className="head-logo" href="/">
                <img
                  src={require("../../../asset/payoff logo.png")}
                  alt="m pay-off logo"
                  className="logo-circle"
                />
              </a>
              <a
                href="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1">
                  <XCircleFill />
                </i>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0 ">
              <ul className="navbar-nav">
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/"}
                  footaname={"Home"}
                />
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/aboutus"}
                  footaname={"About Us"}
                />

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/services"}
                  footaname={"Services"}
                />

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/founding"}
                  footaname={"Founding Team"}
                />

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/contactus"}
                  footaname={"Contactus"}
                />

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/login"}
                  footaname={"Login"}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
