import React from 'react';
import Icon, { types } from '../icon';
import styles from './styles.css'

const SocialLinks = () => (
  <ul className="social-links-list">
    <li className="social-links-list-item">
      <a
        href="https://facebook.com/pburtchaell"
        title="Patrick Burtchaell on Facebook"
      >
        <Icon type={types.FACEBOOK} />
        Facebook
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        href="https://twitter.com/pburtchaell"
        title="Patrick Burtchaell on Twitter"
      >
        <Icon type={types.TWITTER} />
        Twitter
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        href="https://github.com/pburtchaell"
        title="Patrick Burtchaell on GitHub"
      >
        <Icon type={types.GITHUB} />
        GitHub
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        href="https://dribbble.com/pburtchaell"
        title="Patrick Burtchaell on Dribbble"
      >
        <Icon type={types.DRIBBBLE} />
        Dribbble
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        href="mailto:patrick@pburtchaell.com"
        title="Patrick Burtchaell on email"
      >
        patrick@pburtchaell.com
      </a>
    </li>
  </ul>
);

export default SocialLinks;
