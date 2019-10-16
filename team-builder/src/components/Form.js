import React, {useState, useEffect} from 'react';

const Form = props => {
    const [member, setmember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = event => {
        setmember({
            ...member, 
            [event.target.name] : event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setmember({
            name: "",
            email: "",
            role: ""
        })
    }
    return (
        <form onSubmit={submitForm}>
            <label> Name
                <input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Add Name"
                onChange={handleChanges}
                value={member.name}/>
            </label>
            <label> Email
                <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Add Email"
                onChange={handleChanges}
                value={member.email}/>
            </label>
            <label> Role
                <input 
                id="role" 
                name="role" 
                type="text" 
                placeholder="Add role"
                onChange={handleChanges}
                value={member.role}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Form;

