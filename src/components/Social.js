import React from 'react';
import '../App.css';
import Facebook from '../svg/facebook';
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
  },
  {
    href: 'http://www.facebook.com/annagarciamusic',
    title: 'Like me on Facebook',
    icon: Facebook
  }
];

const Icon = ({ icon, href, title }) => (
  <a className="social" href={href} title={title} target="_blank">
    {icon}
  </a>
);

const SocialGroup = () => (
  <ul className="socialNav">
    {socialList.map(social => (
      <li key={social.href}>
        <Icon href={social.href} title={social.title} icon={social.icon} />
      </li>
    ))}
  </ul>
);

export default SocialGroup;
