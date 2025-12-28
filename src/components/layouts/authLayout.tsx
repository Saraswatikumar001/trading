import Navbar from "../microui/navbar"
import Seconadrynavigation from "../microui/seconadrynavigation"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Seconadrynavigation />
            {children}
        </>
    )
}

export default AuthLayout
