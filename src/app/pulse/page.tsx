"use client"

import AuthLayout from "@/components/layouts/authLayout"
import Maincard from "@/components/microui/maincard"

const Pulse = () => {
    return (
        <AuthLayout>
            <main className="px-5 py-5 flex flex-col gap-3">
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h3 className="text-xl font-medium">Pulse</h3>
                    </div>
                </div>
                <div className="flex">
                    <Maincard extraclass="w-1/3 rounded-s" />
                    <Maincard extraclass="w-1/3" />
                    <Maincard extraclass="w-1/3 rounded-e" />
                </div>
            </main>
        </AuthLayout>
    )
}

export default Pulse