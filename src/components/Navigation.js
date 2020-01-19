import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{position: "fixed", right: 50, top: 0}}>
        <p onClick={() => onRouteChange("signin")} className="f3 dim black tr pa3 underline pointer">
            Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="center" style={{position: "fixed", right: 50, top: 0}}>
        <p onClick={() => onRouteChange("signin")} className="f3 dim black tr pa3 underline pointer">
            Sign In
        </p>
        <p onClick={() => onRouteChange("register")} className="f3 dim black tr pa3 underline pointer">
            Register
        </p>
      </nav>
    )
  }
}  

export default Navigation;