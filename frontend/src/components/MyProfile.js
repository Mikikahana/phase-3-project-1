import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import EditMyProfile from "./EditMyProfile";
import "./MyProfile.css"


function MyProfile ({ activeUser }) {
	const [profile, setProfile] = useState({})
	const [isActiveUser, setIsActiveUser] = useState(false)
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/find_by_username/${params.username}`)
			.then(res => res.json())
			.then(user => {
				setProfile(user);
				if (activeUser) {
					if (user.id === activeUser.id) {
						setIsActiveUser(true)
					}
				}
			})
	},[activeUser, params])

	return (
    <div className="profile-container">
			{profile ? (
				<>
					<h1 className="profile-heading">{isActiveUser ? "Your Profile |" : null } {`${profile.first_name} ${profile.last_name}`}</h1>
          <EditMyProfile/>
					<div className="profile-pic-div">
						<img className="user-picture-in-profile"
						src={profile.image_url}
						alt="profile"
						/>

						{isActiveUser ? (
							<Link className="link-to-edit" to={`/edit-user/${profile.username}`}><button className="edit-button">Edit Profile</button></Link>
						) : null}
					</div>
				</>
			) : null}
    </div>
    )
}

export default MyProfile;