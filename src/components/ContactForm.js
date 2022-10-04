// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({clickHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewcontact] = useState({
        name: "", phone: "", email: "", photo:""
    })

    const changeHandler = (e) => {
        setNewcontact({...newContact,[e.target.name]:e.target.value, });
        
    }

    return (
        <>
        <div className="contact-form">
            <TextField required sx={{margin:'5px'}} name='name' label='Name' variant="outlined" value={newContact.name} onChange={changeHandler}/>
            <TextField required sx={{margin:'5px'}} name='phone' label='Phone' variant="outlined" value={newContact.phone} onChange={changeHandler}/>
            <TextField required sx={{margin:'5px'}} name='email' label='email' variant="outlined" value={newContact.email} onChange={changeHandler}/>
            <TextField required sx={{margin:'5px'}} name='photo' label='Photo url' variant="outlined" value={newContact.photo} onChange={changeHandler}/>
            <Button sx={{margin:'5px'}} variant="outlined" onClick={() => clickHandler(newContact)}>Add New</Button>
        </div>    
        </>
    );
}

export default ContactForm;