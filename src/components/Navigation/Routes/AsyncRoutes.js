import Loadable from 'react-loadable';
import BasicPageLoader from '../../Loader/BasicPageLoader';
import ContactPageLoader from '../../Loader/ContactPageLoader';

export const Music = Loadable({
  loader: () => import('../../Music/'),
  loading: BasicPageLoader
});

export const About = Loadable({
  loader: () => import('../../About'),
  loading: BasicPageLoader
});

export const Code = Loadable({
  loader: () => import('../../Code'),
  loading: BasicPageLoader
});

export const Contact = Loadable({
  loader: () => import('../../Contact'),
  loading: ContactPageLoader
});

export const NoMatch = Loadable({
  loader: () => import('../../NotFound'),
  loading: BasicPageLoader
});
