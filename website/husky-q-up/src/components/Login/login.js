import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "925806163579-kmv3bckvc1m6j8phdmi07mtbhlde7tb1.apps.googleusercontent.com";

const Login = (props) => {
    const respond = (res) => {
        console.log(res.profileObj);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with UW Google"
                onSuccess={respond}
                onFailure={respond}
                cookiePolicy={'single_host_origin'}
                hostedDomain={"uw.edu"}>
            </GoogleLogin>
        </div>
    );


}

export default Login;