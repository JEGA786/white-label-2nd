import { Firstsildes, Testimonial, Text } from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Services() {
  return (
    <div className="main services">
      <Dashboardhead />
      <div className="mainpagehead">
        <Firstsildes
          h1={`M pay-off 𝗼𝗳𝗳𝗲𝗿𝘀 𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗳𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗮𝗻𝗱 𝗽𝗮𝘆𝗺𝗲𝗻𝘁 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝘁𝗼 𝗲𝗮𝘀𝗲 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗿𝗮𝗻𝘀𝗮𝗰𝘁𝗶𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀`}
          img={require("../../../asset/sample1/service.png")}
        />
      </div>

      <Text h1={"𝗦𝗘𝗥𝗩𝗜𝗖𝗘𝗦"} h2={"𝗦𝗘𝗥𝗩𝗜𝗖𝗘𝗦"} />
      <div className="d-flex flex-wrap mission justify-content-center  py-5">
        <Testimonial
          img={require("../../../asset/sample1/services/img1.png")}
          h4={"𝗗𝗠𝗧"}
          p1={`Domestic Money Transfer (DMT) which is an assisted service to facilitate money transfer needs of unbanked, under-banked and migrant people in India.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img3.png")}
          h4={"𝗔𝗘𝗣𝗦"}
          p1={`Aadhaar card holders can seamlessly make financial transactions, through which you can, make withdrawals, make enquiry about bank balance.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img2.png")}
          h4={"𝗣𝗮𝗻 𝗖𝗮𝗿𝗱 𝗦𝗲𝗿𝘃𝗶𝗰𝗲"}
          p1={`Now get a new PAN card made or get an existing one updated through authorized channels. With strong and secure network.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img4.png")}
          h4={"𝗜𝗻𝘀𝘂𝗿𝗮𝗻𝗰𝗲"}
          p1={`Domestic Money Transfer (DMT) which is an assisted service to facilitate money transfer needs of unbanked, under-banked and migrant people in India.`}
        />

        {/*  */}
        <Testimonial
          img={require("../../../asset/sample1/services/img5.png")}
          h4={"𝗘𝗠𝗜 𝗖𝗼𝗹𝗹𝗲𝗰𝘁𝗶𝗼𝗻"}
          p1={`Safeguard your customers from the uncertainties of life. Protect them with affordable insurance plans across health, medical and general insurance`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img6.png")}
          h4={"𝗠𝗶𝗰𝗿𝗼 𝗔𝗧𝗠"}
          p1={`Aadhaar card holders can seamlessly make financial transactions, through which you can, make withdrawals, make enquiry about bank balance.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img7.png")}
          h4={"𝗠𝗼𝗯𝗶𝗹𝗲 𝗮𝗻𝗱 𝗗𝗧𝗛 𝗿𝗲𝗰𝗵𝗮𝗿𝗴𝗲"}
          p1={`Now get a new PAN card made or get an existing one updated through authorized channels. With strong and secure network.`}
        />
        <Testimonial
          img={require("../../../asset/sample1/services/img8.png")}
          h4={"𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗴𝗮𝘁𝗲𝘄𝗮𝘆"}
          p1={`Safeguard your customers from the uncertainties of life. Protect them with affordable insurance plans across health, medical and general insurance`}
        />
      </div>

      <Dashboardfooter />
    </div>
  );
}
