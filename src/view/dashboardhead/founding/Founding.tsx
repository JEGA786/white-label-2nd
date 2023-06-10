import { Firstsildes, Testimonial, Text } from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Founding() {
  return (
    <div className="main founding">
      <Dashboardhead />
      <div className="mainpagehead pt-1">
        <Firstsildes
          h1={`𝗢𝘂𝗿 𝗖𝗼𝗺𝗽𝗮𝗻𝘆 𝗙𝗼𝘂𝗻𝗱𝗲𝗿 𝗮𝗻𝗱 𝗖𝗼-𝗙𝗼𝘂𝗻𝗱𝗲𝗿`}
          img={require("../../../asset/sample1/co-founder.png")}
        />
      </div>
      <Text h1={"𝗙𝗼𝘂𝗻𝗱𝗶𝗻𝗴 𝗧𝗲𝗮𝗺"} h2={"𝗙𝗼𝘂𝗻𝗱𝗶𝗻𝗴 𝗧𝗲𝗮𝗺"} />

      <div className="col-lg-10 mx-auto py-5">
        <Testimonial
          img={require("../../../asset/sample1/found1.png")}
          h4={`Derrick Rose`}
          p1={`Co Founder & CEO`}
          p2={`Entrepreneurial director proven his ability to enhance the operational efficiency, customer experience and ultimately profitability of businesses spanning the last 20 years.`}
          p3={
            "Has enjoyed supreme success during employment, for his start up focusing on Digital payments, Distribution Channel, Financial Inclusion, Business Development and other Financial services which will increase the business turnover rapidly."
          }
        />
        <Testimonial
          img={require("../../../asset/sample1/found2.png")}
          h4={`Lebron James`}
          p1={`Co Founder & C0O`}
          p2={`Successful in Sales and Distribution across Pharma Telecom and financial services Focusing on generating business and deriving the same. Have been part of launching team member of Reliance Petroleum, Hutch Vodafone Aircel and MTS, 22 years of experience in all domains.`}
        />
      </div>

      <Dashboardfooter />
    </div>
  );
}
