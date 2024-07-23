import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Contact';

const routes = [
  {
    path: '/',
    component: Home,
    protected: false,
  },
  {
    path: '/about',
    component: About,
    protected: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    protected: true,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
];

export default routes;