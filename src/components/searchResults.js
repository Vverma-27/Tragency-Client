import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/image1.jpg";
import video from "../videos/Video.mp4";
import Sidebar from "./sidebar";
import {
  FaComment,
  FaCommentMedical,
  FaGlobe,
  FaPlaneDeparture,
} from "react-icons/fa";
import useQuery from "./useQuery";

const Search = () => {
  const query = useQuery();
  const q = query.get("query");
  const t = query.get("type");
  const renderedPost = () => {
    switch (t) {
      case "images":
        return <img src={Image1} alt="Post Image" class="post-media" />;
      case "blogs":
        // console.log(t);
        return (
          <p
            className="sub-headings"
            style={{ fontSize: "1.3rem", lineHeight: "3rem" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nihil repudiandae magni quisquam deleniti dicta rem repellat. Velit
            nesciunt vero, iusto laborum officia, ullam deserunt veniam quas
            nulla delectus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas nobis veritatis quia animi ad consequatur aspernatur
            eos at recusandae culpa ut ex officiis dolorem odio, totam magnam
            accusamus impedit voluptatibus? Adipisci, laborum amet eaque nostrum
            earum tenetur. Nulla porro amet tenetur sint debitis provident
            accusamus id quisquam? Placeat similique facere ipsam, expedita
            nihil itaque animi, ut aliquid dolorum, laboriosam qui? Praesentium
            doloremque voluptates harum nostrum ut magni nisi alias expedita
            dolore officiis. Temporibus earum velit quasi, asperiores repellat a
            voluptas ab culpa nam atque doloribus architecto molestiae saepe
            esse eum! Officia ullam aliquid, maxime quo placeat nobis. Aliquam
            impedit tempora rem dolorem corporis expedita, incidunt vero alias
            voluptates possimus necessitatibus temporibus nemo. Expedita veniam
            laboriosam culpa velit nostrum dolores nemo. Explicabo, commodi
            eveniet? Ducimus, nisi laudantium! Rem reprehenderit dolores alias,
            ullam minus ducimus, dolore, facere nisi praesentium corporis
            voluptatibus qui soluta veniam obcaecati quibusdam harum at
            temporibus accusamus? Aliquid, voluptate{" "}
            <Link to={`/results?query=ladakh&type=images`}>
              <span className="blue">...Read More</span>
            </Link>
          </p>
        );
      case "vlogs":
        return (
          <video
            src={video}
            controls="controls"
            autoPlay={true}
            class="post-media"
          />
        );
    }
  };
  const renderedCaption = () => {
    switch (t) {
      case "images":
        return "Wow Look at these beautiful pictures from Ladakh";
      case "vlogs":
        return "Look at my beutiful vlog from ladakh";
    }
  };
  return (
    <>
      <Sidebar />
      <section class="container">
        <p class="heading_main" style={{ textTransform: "capitalize" }}>
          Showing {t} for:
        </p>
        <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
          {q}
        </h2>
        <p class="note bottom">
          To change result type, please select option from sidebar
        </p>
      </section>
      <section class="post container">
        <section className="post-info">
          <img src={Image1} alt="Profile image" className="profile-photo" />
          <p className="heading_main" style={{ fontSize: "1.3rem" }}>
            Deepanshu Rampuria
            <br />
            <span className="note">12 April, 2020 18:56 PM</span>
          </p>
        </section>
        {renderedPost()}
        <section className="extras">
          <p className="note" style={{ fontSize: "1.4rem" }}>
            <FaPlaneDeparture /> 60 TravelUps
          </p>
          <p className="note" style={{ fontSize: "1.4rem" }}>
            <FaComment /> View All 80 Travelcussions
          </p>
          <p className="note" style={{ fontSize: "1.4rem" }}>
            <FaCommentMedical /> Add a new travelcussion
          </p>
          <p className="note" style={{ fontSize: "1.4rem" }}>
            <FaGlobe /> Ladakh,{" "}
            <Link to={`/results?query=ladakh&type=images`}>
              <span class="blue" style={{ fontWeight: "300" }}>
                {" "}
                view posts related to Ladakh
              </span>
            </Link>
          </p>
        </section>
        <p className="sub-headings">{renderedCaption()}</p>
      </section>
    </>
  );
};

export default Search;
