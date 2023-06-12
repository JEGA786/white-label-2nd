import "../component/Layout.css";
import React from "react";

export function Carousel(props: any) {
  return (
    <div className={props.classname} data-bs-interval={props.interval}>
      <img src={props.img1} className="d-block img-fluid w-100 " alt="..." />
      <div className="carousel-captio">
        <h1 className="">{props.h1}</h1>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export function Register(props: any) {
  return (
    <div className="reg  p-3 d-flex justify-content-satrt" data-aos="fade-up">
      <i className={props.icon}></i>
      <div className="d-flex flex-column align-items-start">
        <h6 className="text-bold fs-5">{props.h6}</h6>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export function Testimonial(props: any) {
  return (
    <div className="test-div" data-aos="zoom-in">
     <div className="testimonial-div"> <img className="img-fluid test-img" src={props.img} alt="testimonial" /></div>
      <h2 className="">{props.h2}</h2>
      <h4 className="">{props.h4}</h4>
      <p className="p1">{props.p1}</p>
      <p className="" style={{ fontWeight: "500", lineHeight: "28px" }}>
        {props.p2}
        <p className="pt-3">{props.p3}</p>
      </p>
    </div>
  );
}
export function Button(props: any) {
  return (
    <button data-aos="slide-up" className={props.btnclassname}>
      {props.btnvalue}
    </button>
  );
}

export function Text(props: any) {
  return (
    <div data-aos="slide-right" className="test mt-5">
      <h1>{props.h1}</h1>
      <h2 className="">{props.h2}</h2>
    </div>
  );
}

export function Firstsildes(props: any) {
  return (
    <div className="firstslide d-flex flex-wrap py-5">
      <div
        data-aos="slide-up"
        className=" col-md -6 col-lg-7 text-center mt-sm-5 col-12 mt-3  d-flex align-items-center justify-content-center"
      >
        <h1 className="px-lg-5">{props.h1}</h1>
        <h4>{props.h4}</h4>
      </div>
      <div className=" col-md -6 col-lg-5 col-12 d-flex align-items-center justify-content-center">
        <img
          data-aos="slide-right"
          className="img-fluid mt-lg-0 mt-5"
          src={props.img}
          alt="images-fintech"
        />
      </div>
    </div>
  );
}

export function Input(props: any) {
  return (
    <div className={props.inputdiv}>
      <i className={props.icon}></i>
      <input
        className={props.inputfield}
        placeholder={props.placeholder}
        type={props.type}
      />

      <span className={props.bar}></span>
    </div>
  );
}
