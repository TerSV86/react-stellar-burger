import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export const ProtectedRouterElement = ({ element }) => {
    const user = useSelector(store => store.auth.user)

    /* const [isUserLoaded, setUserLoaded] = useState(false)
console.log(element);
    const init = async () => {
        console.log(isUserLoaded);
        if (user) {
            console.log('tyt');
           await setUserLoaded(true)
            
        }
        console.log(isUserLoaded);

    }
    useEffect(() => {
        init();
        console.log(isUserLoaded);
    }, []) */


    if (!user) {

        return <Navigate to='/login' replace />
    }

    return element
}