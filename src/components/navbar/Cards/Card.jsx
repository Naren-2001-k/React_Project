import React from "react";
import img1 from "../image/bg_1.jpg";
import img2 from "../image/bullet.png";
import img3 from "../image/light-bulb.png";
import img4 from "../image/presentation.png";
import "./card.css";
const cardDetails = [
  {
    img: img1,
    heading: "Knowledge is power",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci officia laudantium vel nam dolorem libero necessitatibus sit non numquam.",
  },
  {
    img: img2,
    heading: "Senior high school",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci officia laudantium vel nam dolorem libero necessitatibus sit non numquam.",
  },
];

export const Card = () => {
  return (
    <main className="card">
      {cardDetails.map((card, i) => {
        return (
          <section key={i} className="innerCard">
            <div className="imgSection">
              <img src={card.img} />
            </div>
            <h2>{card.heading}</h2>
            <p>{card.content}</p>
          </section>
        );
      })}
    </main>
  );
};
