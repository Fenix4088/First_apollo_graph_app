import React from "react";
import {useQueryProfile} from "./hooks/useQueryProfile/useQueryProfile";


export const Profile = () => {
    const { getPetProfile, loading, error, pet} = useQueryProfile();

    const loadProfile = () => getPetProfile({variables: {id: "C-2"}});

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error.message}</p>;


    return(
        <>
            <h1>profile</h1>
            <button onClick={loadProfile}>Get PetProfile</button>
            <p>{pet && pet.name}</p>
        </>
    )
}