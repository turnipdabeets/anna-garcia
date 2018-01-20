import React from 'react';
import './Social.css';
import TouchableAnchor from './TouchableAnchor';
import Linkedin from '../svg/linkedin';
import Github from '../svg/github';
import Twitter from '../svg/twitter';

const socialList = [
  {
    href: 'https://github.com/turnipdabeets',
    title: 'See my Github projects',
    icon: Github
  },
  {
    href: 'https://www.linkedin.com/in/annagarcia/',
    title: 'Connect with me on Linkedin',
    icon: Linkedin
  },
  {
    href: 'http://www.twitter.com/turnipdabeets',
    title: 'Follow me on Twitter',
    icon: Twitter
  }
];

const SocialGroup = () => (
  <ul className="socialGroup">
    {socialList.map(social => (
      <li key={social.href}>
        <TouchableAnchor
          href={social.href}
          title={social.title}
          render={social.icon}
          touchClass="hitSlop socialhover"
          defaultClass="hitSlop"
          target="_blank"
        />
      </li>
    ))}
  </ul>
);

export default SocialGroup;
