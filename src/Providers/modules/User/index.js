import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../Service/api";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("@User/token") || "");
    const [user, setUser] = useState(localStorage.getItem("@User/infor") || {});

    const history = useHistory()

    const singIn = (data) => {
        api.post("/sessions", data)
            .then((response) => {
                const { token, user } = response.data
                setToken(token)
                setUser(user)

                history.push("/whatsnew");
                toast.success("sucess!")

            })
            .catch((err) => toast.error("user invalid"))
    }

    const subscribeNewUser = (data) => {
        console.log(data)
        console.log("teste")

        api.post("/users", {
            ...data,
            bio: "subscribe to web site Coke",
            course_module: "null"
        })
            .then((response) => {
                console.log(response)
                history.push("/login");
                toast.success("Account created with sucess!");
            })
            .catch((err) => console.log(err))
    }

    const newUser = (data) => {
        console.log(`ìt's user subscribed ${data}`)
    }


    return (
        <userContext.Provider value={{ singIn, subscribeNewUser, newUser, token, user }}>
            {children}
        </userContext.Provider>
    )
}


export const useUser = () => useContext(userContext)