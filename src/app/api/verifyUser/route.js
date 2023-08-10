import { adminAuth } from "@/utils/admin firebase"
import createUser from "@/utils/createUser"
import { NextResponse } from "next/server"

export async function POST (req, res) {
    const data = await req.json()
    const userToken = data.userToken
    const userEmail = data.email
    const username = data.username
    console.log(adminAuth)
    await adminAuth.verifyIdToken(userToken)
        .then((decodedToken) => {
            const uid = decodedToken.uid
            const tokenEmail = decodedToken.email
            const user = createUser(tokenEmail, userEmail, uid, username)
            if(user.validated === true) {
                return NextResponse.json({
                    uid: uid,
                    username: username,
                    email: userEmail
                })
            }else{
                return NextResponse.json({
                    error: 'erro'
                })
            }
        })
}