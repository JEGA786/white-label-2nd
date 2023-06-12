import "./Dashboard.styles.css";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
import { Carousel, Testimonial, Text } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";

export function Dashboard() {
  return (
    <div className="main">
      <Dashboardhead />
      <div data-aos="zoom-in" className="mainpagehead">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <Carousel
              classname={"carousel-item active"}
              interval={"10000"}
              img={require("../../asset/sample1/scroll1.png")}
              h1={`𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘆𝗼𝘂𝗿 𝗗𝘂𝗸𝗮𝗮𝗻 𝗶𝗻𝘁𝗼 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗗𝘂𝗸𝗮𝗮𝗻`}
            />
            <Carousel
              classname={"carousel-item active"}
              interval={"2000"}
              img={require("../../asset/sample1/scroll2.png")}
              h1={`𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗲 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗲𝗮𝗿𝗻 𝗮𝘁𝘁𝗿𝗮𝗰𝘁𝗶𝘃𝗲 𝗰𝗼𝗺𝗺𝗶𝘀𝘀𝗶𝗼𝗻`}
            />
            <Carousel
              classname={"carousel-item"}
              img={require("../../asset/sample1/scroll3.png")}
              h1={`𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘆𝗼𝘂𝗿 𝗗𝘂𝗸𝗮𝗮𝗻 𝗶𝗻𝘁𝗼 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗗𝘂𝗸𝗮𝗮𝗻`}
            />
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Text h1={"𝗢𝗨𝗥 𝗣𝗔𝗥𝗧𝗡𝗘𝗥𝗦"} h2={"𝗢𝗨𝗥 𝗣𝗔𝗥𝗧𝗡𝗘𝗥𝗦"} />
      <div
        data-aos="fade-up"
        className="container infinite-scroll "
        id="container"
      >
        <div className="scroll-img">
          <img
            src={require("../../asset/sample1/partners/airtel.png")}
            alt="airtel img"
          />
          <img src={require("../../asset/sample1/partners/fino.png")} alt="" />
          <img
            src={require("../../asset/sample1/partners/indicore.png")}
            alt="indicore img"
          />
          <img src={require("../../asset/sample1/partners/paytm.png")} alt="paytm img" />
          <img
            src={require("../../asset/sample1/partners/airtel.png")}
            alt="airtel img"
          />
          <img src={require("../../asset/sample1/partners/fino.png")} alt=" fino img" />
          <img
            src={require("../../asset/sample1/partners/indicore.png")}
            alt="indicore img"
          />
          <img src={require("../../asset/sample1/partners/paytm.png")} alt="paytm img" />
        </div>
      </div>

      <Text h1={"𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦"} h2={"𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦"} />
      <div className="testimonial d-flex flex-wrap justify-content-around py-3">
        <Testimonial
         img={require("../../asset/sample1/𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦 1.png")}
          h4={`M-Payoff`}
          p1={`Testimonials`}
          p2={`payoff ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko M pay-off ki sewaon upyog k liye salah dunga.`}
        />
        <Testimonial
          img={require("../../asset/sample1/𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦 2.png")}
          h4={`M-Payoff`}
          p1={`Testimonials`}
          p2={`payoff ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko M pay-off ki sewaon upyog k liye salah dunga.`}
        />
        <Testimonial
          img={require("../../asset/sample1/𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦 3.png")}
          h4={`M-Payoff`}
          p1={`Testimonials`}
          p2={`payoff ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko M pay-off ki sewaon upyog k liye salah dunga.`}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
