import React from "react";

const TeamList = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.email}</h3>
            <h3>{props.role}</h3>
        </div>
    )
}

export default TeamList;