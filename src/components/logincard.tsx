import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Submitting form...");
        try {
            // console.log("Sending request...");
            const res = await axios.post('https://rumi-backend-wvba.onrender.com/api/auth/login', { email, password }, {withCredentials: true});
            alert('Logged in successfully!');
            console.log("Received response:", res);
            // console.log("Logged in successfully!");
            if(res.status===200){
                setTimeout(() => {
                navigate('/signup');
                }, 2000);
            }
        } catch (err) {
            // console.log("Error:", err);
        alert('Login failed! ');
        }
      };
    return(
        <div className="flex items-center justify-center min-h-screen p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
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
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="w-full" type="submit">
                Login
            </button>
        </form>
        <div className="flex flex-col items-center">
            <hr className="my-4" />
            <p className="text-sm text-muted-foreground">
                Create a new account? 
                <button 
                    className="p-0 h-auto" 
                    onClick={() => navigate('/signup')}
                >
                    Signup
                </button>
            </p>
        </div>
    </div>
    )
}