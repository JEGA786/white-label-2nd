import React from "react";
import { Firstsildes, Testimonial } from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Aboutus() {
  return (
    <div className="main about">
      <Dashboardhead />
      <div className="mainpagehead ">
        <Firstsildes
          h1={`𝗪𝗲 𝗮𝗿𝗲 𝗮 𝗰𝗼𝗺𝗽𝗮𝗻𝘆 𝘄𝗶𝘁𝗵 𝗮 𝘀𝘁𝗿𝗶𝘃𝗲 𝘁𝗼 𝗴𝗿𝗼𝘄 𝗮𝗻𝗱 𝗹𝗲𝗮𝗱 𝗳𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗶𝗻𝗰𝗹𝘂𝘀𝗶𝗼𝗻 𝗶𝗻 𝗜𝗻𝗱𝗶𝗮`}
          img={require("../../../asset/sample1/about.png")}
        />
      </div>
      <div className="d-flex flex-wrap mission justify-content-around">
        <Testimonial
          img={require("../../../asset/sample1/𝗢𝘂𝗿 𝗠𝗶𝘀𝘀𝗶𝗼𝗻.png")}
          h2={"𝗢𝘂𝗿 𝗠𝗶𝘀𝘀𝗶𝗼𝗻"}
          p1={`M pay-off is building the largest network of its business associates and these associates are equipped with technology and connectivity to provide retail financial services via a one stop payment solution platform for its end customers.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/𝗢𝘂𝗿 𝘃𝗶𝘀𝗶𝗼𝗻.png")}
          h2={"𝗢𝘂𝗿 𝘃𝗶𝘀𝗶𝗼𝗻"}
          p1={`M pay-off brings banking and financial services to millions of Indian consumers who are under banked and unbanked, to provide banking services at doorstep.`}
        />
      </div>

      <Dashboardfooter />
    </div>
  );
}
