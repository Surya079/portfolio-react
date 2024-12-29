import  { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const EditProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('User profile updated:', user);
    };

    return (
        <Container className="flex flex-col items-center mt-10">
            <Typography variant="h4" className="mb-6">
                Edit Profile
            </Typography>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <TextField
                        label="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        className="mb-4"
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        label="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        className="mb-4"
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        label="Bio"
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        className="mb-4"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" className="w-full">
                    Save Changes
                </Button>
            </form>
        </Container>
    );
};

export default EditProfile;