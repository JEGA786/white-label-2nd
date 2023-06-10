// import { PersonFill, LockFill } from "react-bootstrap-icons";
import"../contact-us/Contacus.css"

import {
  Button,
  Firstsildes,
  Input,
  Testimonial,
  Text,
  Register,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Contactus() {
  return (
    <div className="main contactus">
      <Dashboardhead />
      <div className="mainpagehead pt-1">
        <Firstsildes
          h1={`𝗖𝗼𝗺𝗲 𝗝𝗼𝗶𝗻 𝗨𝘀 & 𝗘𝘅𝗽𝗹𝗼𝗿𝗲 𝗡𝗲𝘄 𝗢𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲`}
          img={require("../../../asset/contactus.png")}
        />
      </div>

      <div className="d-flex flex-wrap contact-address my-5 py-5">
          <div className="col-md-6 ">
            <img
              data-aos="zoom-in"
              className="company-img img-fluid"
              src={require("../../../asset/company.png")}
              alt="."
            />
          </div>
          <div className="col-md-6 register">
          <Register 
              icon={"fs-3 mt-3 fa-solid fa-building col-3 "}
              h6={"Company Name"}
              p={`M-Kube Infocon Pvt Ltd`}
            />
            
            <Register
              icon={"fs-3 mt-3 fa fa-location-dot col-3"}
              h6={"Registered Address"}
              p={`First Floor, Plot No-H-85 A, TNHB Colony, Sialiyaneri, Anaiyur, Madurai-625017.
              GST No : 33AAMCM1138J1ZH`}
            />
            
            <Register
              icon={" fs-3 mt-3 fa fa-envelope col-3"}
              h6={"Email"}
              p={`mak@mkube.co.in`}
            />
            <Register
              icon={"fs-3 mt-3 fa fa-phone col-3"}
              h6={"Phone no"}
              p={`+91 90252 17750`}
            />
            <Register
              icon={"fs-3 mt-3 fa fa-book col-3"}
              h6={"GST NO"}
              p={`33AAMCM1138J1ZH`}
            />
          </div>
        </div>

        <div className="row mx-0 map d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-center regional" data-aos="slide-up">
            <h2 className="fw-bold">Regional Office</h2>
            <h5 className="fw-bold">Madurai</h5>
            <p>
              
First Floor, Plot No-H-85 A, TNHB Colony, Sialiyaneri, Anaiyur, Madurai-625017. GST No : 33AAMCM1138J1ZH
            </p>
          </div>
          <div className="map-all p-3 col-lg-5 col-12  col-md-6 d-flex justify-content-center align-items-center">
            {/* <img
              data-aos="zoom-in"
              className="img-fluid"
              src={require("../../../asset/c3.png")}

              alt="."
            /> */}


<div
          className="mapdiv  "
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="false"
        >
          <div className="map-location p-0 m-0 d-flex justify-content-center align-items-center mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7821220643104!2d78.10135648116575!3d9.952077564755598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf54147bd42f%3A0x17e3194ccf525c57!2sM1-85%2C%20TNHB%20Colony%2C%20Koodal%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625018!5e0!3m2!1sen!2sin!4v1686047051609!5m2!1sen!2sin"
              
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>
          </div>
        </div>


      <div className=" bg-light py-5 my-5" data-aos="zoom-up">
        <Text h1={"𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦"} h2={"𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦"} />

        <div className=" mx-auto d-flex contactus-login flex-wrap justify-content-center px-lg-0 px-sm-5">
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 "}
            placeholder={"First Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Last Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Email Address"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div four col-lg-8 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Organization"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Mobile Number"}
            type={"name"}
          />
          <div className="input-div col-md-4 four1 col-md-8 col-11">
            <textarea
              className="input-field col-lg-11 col-11"
              placeholder="Message"
              name="textarea"
              id=""
            ></textarea>
          </div>

          <Input
            inputdiv={"input-div file col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11 "}
            placeholder={"Hello"}
            type={"file"}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button btnclassname={"col-sm-5 col-8 button"} btnvalue={"Submit"} />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}
