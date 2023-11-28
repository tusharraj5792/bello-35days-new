import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { compareDate, deleteCookies, getCookieData } from '../../utilities/utils';

const AuthComponent = (components) => {
  const navigate = useNavigate();
  const location = useLocation();
  const loginDuration = new Date(getCookieData('RefreshCookie'));
  const refreshDuration = new Date(getCookieData('RefreshTokenExpiryCookie'));
  useEffect(() => {
   
    if (!compareDate(new Date(), loginDuration) && !compareDate(new Date(), refreshDuration)) {
      navigate('/login', {
        state: { from: location.pathname, search: location.search },
      });
      localStorage.clear();
      deleteCookies();
    }
  }, [refreshDuration, loginDuration]);
  return components;
};

export default AuthComponent;
