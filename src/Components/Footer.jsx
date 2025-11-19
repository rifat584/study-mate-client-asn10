import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-base-200 ">
      <div className="w-full">
        <div className="w-full flex justify-around items-center ">
          <div className="flex flex-col justify-between items-start mb-6">
            <img
              src="https://eduappcenter-production-s3-bucketkey-z9xh9gg43em.s3.amazonaws.com/uploads/production/lti_app/banner_image/8f369e0e-3df8-4e1f-b5ad-bd09f114cce6.png"
              alt="Project Logo"
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-2xl font-bold text-base-100">StudyMate</p>
            <p className="text-sm mt-2 max-w-sm text-center">
              Build confidence and stay consistent with the right partner.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-6 ">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>

          <div className="flex gap-4 mb-6">
            <Link to={'https://facebook.com/'} aria-label="Facebook">
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
            <Link to={'https://x.com/'} aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.722-.951.565-2.003.974-3.127 1.195-.89-.982-2.155-1.594-3.53-1.594-2.718 0-4.922 2.203-4.922 4.92 0 .39.044.765.127 1.124-4.098-.205-7.734-2.17-10.169-5.163-.424.729-.665 1.578-.665 2.485 0 1.705.867 3.209 2.188 4.096-.807-.026-1.566-.247-2.227-.616-.002.02-.002.04-.002.062 0 2.385 1.7 4.368 3.951 4.816-.412.11-.849.168-1.299.168-.319 0-.626-.031-.924-.088.63 1.952 2.44 3.38 4.59 3.419-1.688 1.325-3.82 2.119-6.155 2.119-.402 0-.799-.025-1.194-.07 2.175 1.397 4.768 2.21 7.55 2.21 9.055 0 13.999-7.49 13.999-13.999 0-.197-.004-.395-.012-.592.96-.693 1.79-1.569 2.45-2.553z"></path>
              </svg>
            </Link>
            <Link to={'https://linkedin.com/'} aria-label="LinkedIn">
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
