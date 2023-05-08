import { useEffect } from "react";

const Profile = (props) => {

    useEffect(() => {
        console.log("child useEffect" + props.name)
    }, [])
    console.log("child render " + props.name)
    return (
        <div>
            <h1>This is Profile Component</h1>
        </div>
    )
}

export default Profile;