import { useLoginUsingTokenMutation } from "@/redux/features/authApi";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useLoginWithToken = () => {
    const [loginUsingToken] = useLoginUsingTokenMutation();
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = Cookies.get("auth_token");
            if (token) {
                const res = await loginUsingToken(token);
                console.log(res);
                setResponse(res);
            }
        };
        fetchData();
    }, [loginUsingToken]);
    return response;
};
