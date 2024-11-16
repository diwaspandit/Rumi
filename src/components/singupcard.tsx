import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('https://rumi-backend-wvba.onrender.com/api/users/signup', { name, email, password,confirmPassword }, {withCredentials: true});
            if (response.status === 200) {
                alert('Registration successful!');
                setTimeout(() => navigate('/login'), 2000);
            } else {
                alert('Registration failed. ' + response.data.message);
            }
        } catch (error: any) {
            // alert('Registration failed. ');
        }
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password">New Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="w-full" type="submit">
                    Sign Up
                </button>
            </form>
            <div className="flex flex-col items-center">
                <hr className="my-4" />
                <p className="text-sm text-muted-foreground">
                    Already have an account? 
                    <button 
                        className="p-0 h-auto" 
                        onClick={navigateToLogin}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}