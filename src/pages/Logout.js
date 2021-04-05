import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Logout() {
    const history = useHistory();
    const { getLoggedIn } = useContext(AuthContext)
    async function logout() {
        await axios.get("http://localhost:3001/auth/logout");
        await getLoggedIn();
        toast.error('ThankYou', { position: toast.POSITION.BOTTOM_RIGHT })
        history.push("/home");
    }
    return (
        <div>
            <li>
                <button className="text-dark font-weight-bold btn mt-4" onClick={logout} >Logout</button>
            </li>
        </div>
    )
}
