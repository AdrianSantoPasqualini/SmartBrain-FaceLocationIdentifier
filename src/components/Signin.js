import React from 'react';

const Signin = ({ onRouteChange }) => {
    return (
        <article class="br2 ba shadow-5 black b--black-10 mt6 mw6 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3 tc">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3 tc">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="center">
                        <input onClick={() => onRouteChange("home")} className="center b black ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3 center">
                        <p onClick={() => onRouteChange("register")} href="#0" className="f6 link dim black db">Register</p>
                    </div>
                </div>
            </main>
        </article>
      );
}  

export default Signin;