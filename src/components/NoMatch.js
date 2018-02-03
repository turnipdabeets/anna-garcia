import React from 'react';
import PageTemplate from './PageTemplate';
import './NoMatch.css';

const NoMatch = ({ location }) => (
  <PageTemplate
    title="not found"
    intro={`Oops! No match for ${location.pathname}`}
    copy={
      <div className="catContainer">
        <div className="catHead catColor">
          <div className="catLeftEye catEye">
            <div className="leftEyelid eyelid catColor" />
            <div className="pupil" />
          </div>
          <div className="catRightEye catEye">
            <div className="rightEyelid eyelid catColor" />
            <div className="pupil" />
          </div>
        </div>
        <div className="catLeftEar catEar catColor">
          <div className="catLeftInsideEar catInsideEar" />
        </div>
        <div className="catRightEar catEar catColor">
          <div className="catRightInsideEar catInsideEar" />
        </div>
        <div className="catHair catColor" />
        <div className="catBody catColor">
          <div className="catFoot leftFoot catColor" />
          <div className="catFoot rightFoot catColor" />
        </div>
        <div className="catTail">
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
          <span className="catColor" />
        </div>
      </div>
    }
  />
);

export default NoMatch;
