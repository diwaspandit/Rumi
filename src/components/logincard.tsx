// import { useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login(){
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // console.log("Submitting form...");
//         try {
//             // console.log("Sending request...");
//             const res = await axios.post('https://rumi-backend-wvba.onrender.com/api/auth/login', { email, password }, {withCredentials: true});
//             alert('Logged in successfully!');
//             console.log("Received response:", res);
//             // console.log("Logged in successfully!");
//             if(res.status===200){
//                 setTimeout(() => {
//                 navigate('/signup');
//                 }, 2000);
//             }
//         } catch (err) {
//             // console.log("Error:", err);
//         alert('Login failed! ');
//         }
//       };
//     return(
//         <div className="flex items-center justify-center min-h-screen p-4">
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="space-y-2">
//                 <label htmlFor="password">Password</label>
//                 <input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button className="w-full" type="submit">
//                 Login
//             </button>
//         </form>
//         <div className="flex flex-col items-center">
//             <hr className="my-4" />
//             <p className="text-sm text-muted-foreground">
//                 Create a new account? 
//                 <button 
//                     className="p-0 h-auto" 
//                     onClick={() => navigate('/signup')}
//                 >
//                     Signup
//                 </button>
//             </p>
//         </div>
//     </div>
//     )
// }







import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'https://rumi-backend-wvba.onrender.com/api/auth/login',
                { email, password },
                { withCredentials: true }
            );
            alert('Logged in successfully!');
            if (res.status === 200) {
                setTimeout(() => {
                    navigate('/signup');
                }, 2000);
            }
        } catch (err) {
            alert('Login failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-200">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
                    Welcome Back!
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
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
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
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
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-green-600 font-semibold hover:underline"
                        >
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}



