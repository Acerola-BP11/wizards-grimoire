export default function verifyUser(user, setUser, setLoading){
    if(user.validated === true){
        setUser(user.userData)
        setLoading(false)
    }else{
        console.log(user)
        setLoading(false)
        setUser(null)
    }
}