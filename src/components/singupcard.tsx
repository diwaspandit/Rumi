// import { useState, FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Signup() {
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [confirmPassword, setConfirmPassword] = useState<string>('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert('Passwords do not match.');
//             return;
//         }
//         try {
//             const response = await axios.post('https://rumi-backend-wvba.onrender.com/api/users/signup', { name, email, password,confirmPassword }, {withCredentials: true});
//             if (response.status === 200) {
//                 alert('Registration successful!');
//                 setTimeout(() => navigate('/login'), 2000);
//             } else {
//                 alert('Registration failed. ' + response.data.message);
//             }
//         } catch (error: any) {
//             // alert('Registration failed. ');
//         }
//     };

//     const navigateToLogin = () => {
//         navigate('/login');
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen p-4">
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         placeholder="Enter your name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="password">New Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         id="confirmPassword"
//                         type="password"
//                         placeholder="Confirm your password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button className="w-full" type="submit">
//                     Sign Up
//                 </button>
//             </form>
//             <div className="flex flex-col items-center">
//                 <hr className="my-4" />
//                 <p className="text-sm text-muted-foreground">
//                     Already have an account? 
//                     <button 
//                         className="p-0 h-auto" 
//                         onClick={navigateToLogin}
//                     >
//                         Login
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// }

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
            const response = await axios.post(
                'https://rumi-backend-wvba.onrender.com/api/users/signup',
                { name, email, password, confirmPassword },
                { withCredentials: true }
            );
            if (response.status === 200) {
                alert('Registration successful!');
                setTimeout(() => navigate('/login'), 2000);
            } else {
                alert('Registration failed. ' + response.data.message);
            }
        } catch (error: any) {
            alert('Registration failed.');
        }
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Create Your Account
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            New Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={navigateToLogin}
                            className="text-green-600 font-semibold hover:underline"
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
