import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login',
                { emailId: email, password },
                { withCredentials: true }
            );
            console.log(response);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log('Error in Login!', error);
        }
    }
    return (
        <div className="flex justify-center p-5 m-5">
            <div className="card card-dash bg-base-300 w-96 p-3">
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className="card-title">Login</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-left">Email</legend>
                        <input
                            type="text"
                            value={email}
                            className="input"
                            placeholder="What is your email?"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-left">Password</legend>
                        <input
                            type="password"
                            value={password}
                            className="input"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </fieldset>
                    <div className="card-actions justify-center mt-3">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;