import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer px-10 pt-20 pb-6 bg-neutral text-base-200 ">
      <div className="w-full ">
        <div className="w-full flex justify-between items-start ">
          <div className="flex flex-1 flex-col justify-between items-start mb-6">
            <p className=" text-2xl font-bold bg-linear-to-br from-primary to-accent text-transparent bg-clip-text">
              StudyMate
            </p>
            <p className="text-sm mt-2 max-w-sm text-center">
              Build confidence and stay consistent with the right partner.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-6 flex-1">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>

          <div className="flex gap-4 mb-6 flex-1 justify-center">
            <Link to={"https://facebook.com/"} aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            <Link to={"https://x.com/"} aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2H21.5l-7.51 8.57L23 22h-6.9l-5.4-7.43L4.35 22H1l8.05-9.19L1 2h7l4.66 6.39L18.244 2zm-2.41 18h2.17L8.3 4h-2.2l9.73 16z" />
              </svg>
            </Link>
            <Link to={"https://linkedin.com/"} aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.235-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-sm mx-auto mt-12">
          Copyright &copy; 2025 - All right reserved by StudyMate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
