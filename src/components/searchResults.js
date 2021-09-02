import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/image1.jpg";
import Sidebar from "./sidebar";
import TopSearches from "./topSearches";
import {
  FaComment,
  FaCommentMedical,
  FaGlobe,
  FaPlaneDeparture,
} from "react-icons/fa";

const Search = () => {
  return (
    <main class="main">
      <Sidebar />
      <section class="container">
        <p class="heading_main">Showing Image results for:</p>
        <h2 class="sub-headings">Mountains</h2>
        <p class="note bottom">
          To change result type, please select option from sidebar
        </p>
      </section>
      <section class="image-post container">
        <section className="post-info">
          <img src={Image1} alt="Profile image" className="profile-photo" />
          <p className="heading_main" style={{ fontSize: "1.3rem" }}>
            Deepanshu Rampuria
            <br />
            <span className="note">12 April, 2020 18:56 PM</span>
          </p>
        </section>
        <img src={Image1} alt="Post Image" class="post-image" />
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
            <Link>
              <span class="blue"> view posts related to Ladakh</span>
            </Link>
          </p>
        </section>
        <p className="sub-headings">
          Wow Look at these beautiful pictures from Ladakh
        </p>
      </section>
      <TopSearches />
    </main>
  );
};

export default Search;
