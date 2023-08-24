import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>orchestration</span> app
            </h1>
            <p>
            Job  Orchestration is a project aimed to streamline the flow of tracking for different job applied by a job seeker to all different organizations. Main focus has been revolving around effective management and monitoring the status of each job applied for every individual from seeker perspective.Dashboard with all necessary KTI (Key Tracking Indicators) are added for seamless orchestration of applied job roles with details and status visibility
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          {/* <img src={main} alt='job hunt' className='img main-img' /> */}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
