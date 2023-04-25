import {FcGoogle} from 'react-icons/fc';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth} from '../../utils/firebase';

export default function Login() {
    //Sign in with Google 
    const googleProvider = new GoogleAuthProvider();

    //Asynch because it might take time to login 
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth,googleProvider)
        } catch (error) {

        }

    }


    return(
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium">Join Today</h2>
            <div className="py-3">
                <h3 className="py-4 font-medium">Sign in with one of the providers</h3>
                <button className="text-white bg-gray-700 font-medium rounded-lg p-4 flex align-middle gap-2">
                <FcGoogle className='text-2xl'/>Sign in with Google
                
                </button>
            </div>
        </div>
    )
}