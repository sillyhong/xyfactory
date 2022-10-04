import React from 'react';
import styles from './index.module.css';

function ContactusComp() {
  return (
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-8">
        <div className="text-center pt-5 mt-5 mb-5">
          <h1 className="font-weight-light h3">
            <strong>Anchor UI KIT</strong>, a project by Sal @WowThemes.net. You
            can use it for personal, commercial & client projects.{' '}
            <a
              target="_blank"
              href="https://www.wowthemes.net/freebies-license/"
            >
              License.
            </a>
          </h1>
        </div>
        <div className="text-center">
          <a target="_blank" href="https://facebook.com/wowthemesnet/">
            <span
              className="iconbox iconmedium rounded-circle bg-secondary text-white mr-1"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Follow Sal on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </span>
          </a>
          <a target="_blank" href="https://twitter.com/wowthemesnet">
            <span
              className="iconbox iconmedium rounded-circle bg-info text-white mr-1"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Follow Sal on Twitter"
            >
              <i className="fab fa-twitter"></i>
            </span>
          </a>
          <a target="_blank" href="https://github.com/wowthemesnet">
            <span
              className="iconbox iconmedium rounded-circle bg-dark text-white mr-1"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Follow Sal on Github"
            >
              <i className={`fab ${styles.faGithub}`}></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactusComp;
