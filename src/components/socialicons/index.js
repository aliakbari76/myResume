import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaStackOverflow,
  FaGitlab,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.stackoverflow && (
          <li>
            <a href={socialprofils.stackoverflow}>
              <FaStackOverflow />
            </a>
          </li>
        )}
        {socialprofils.gitlab && (
          <li>
            <a href={socialprofils.gitlab}>
              <FaGitlab />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
