import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [profilePic, setProfilePic] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const responseGoogle = (response) => {
		console.log(response);
		const {
			profileObj: { name, email, imageUrl },
		} = response;
		setName(name);
		setEmail(email);
		setProfilePic(imageUrl);
		setIsLoggedIn(true);
	};
	return (
		<div className="container">
			<GoogleLogin
				// clientId="366023343940-ndamikr6o5em3sivatijihspjsg8gmt2.apps.googleusercontent.com"
				clientId="888814538146-kob5kjjjmrfjksql3j2pcjkjju1do7ds.apps.googleusercontent.com"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
			{isLoggedIn ? (
				<div style={{ textAlign: "center" }}>
					<h1>User Information</h1>
					<img className="profile" src={profilePic} alt="Profile" />
					<p>Name: {name}</p>
					<p>Email: {email}</p>
				</div>
			) : (
				""
			)}
		</div>
	);
}
// 888814538146-kob5kjjjmrfjksql3j2pcjkjju1do7ds.apps.googleusercontent.com
export default App;

import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function GoogleLoginButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        profilePic: ""
    });

    const responseGoogle = (response) => {
        console.log(response);
        const { profileObj: { name, email, imageUrl } } = response;
        setUserData({
            name: name,
            email: email,
            profilePic: imageUrl
        });
        setIsLoggedIn(true);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <GoogleLogin
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            ) : (
                <div>
                    <h2>Welcome, {userData.name}!</h2>
                    <img src={userData.profilePic} alt="Profile" />
                    <p>Email: {userData.email}</p>
                </div>
            )}
        </div>
    );
}

export default GoogleLoginButton;
