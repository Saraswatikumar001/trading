import Footer from "../microui/footer"
import Navbar from "../microui/navbar"
import Seconadrynavigation from "../microui/seconadrynavigation"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <Seconadrynavigation />
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout
