import React from "react";
import { BsTwitter, BsInstagram ,BsGithub} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/krishna08_24">
          {" "}
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/denji.makima_/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/krishna-jaiswal-16469215a/">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/Krishna-jaiswal-24">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
