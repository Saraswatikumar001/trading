import React from "react"

const Coincontent = ({ coinLogo, coinName, gap }: { coinLogo: React.ReactNode, coinName: React.ReactNode, gap: React.ReactNode }) => {
    return (
        <span className={`flex items-center ${gap} text-[14px]`}>
            <span className="border px-2 py-0.5 rounded-full">
                {coinLogo}
            </span>
            {coinName}
        </span>
    )
}

export default Coincontent