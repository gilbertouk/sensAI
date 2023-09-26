import { useParams } from "react-router-dom";
import { getUser } from "../utils/api";
import { ProfileCard } from "./ProfileCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProfileList = ({user}) => {
  console.log(user)
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true); 
    
    useEffect(()=> {
        setLoading(true);
        if(user){
            getUser(user.id).then(({currentUser}) => {
                setLoading(false);
                setCurrentUser(currentUser);
            })
        }
    },[user])

    return loading ? (
        <p>loading...</p>
      ) : (
          <>
            <h2>Your classes:</h2>
            {currentUser.map((userProfile) => (
              <li key={userProfile.id}><Link to={`/users/email/${userProfile.email}`}><ProfileCard userProfile={userProfile}/></Link></li>
          ))}
        </>
      );
}