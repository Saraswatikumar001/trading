import React from "react"

const Coincontent = ({ coinLogo, coinName, gap, extraclasses, extraaddons }: { coinLogo: React.ReactNode, coinName: React.ReactNode, gap: React.ReactNode, extraclasses?: string, extraaddons?: React.ReactNode }) => {
    return (
        <span className={`flex items-center ${gap} text-[14px] ${extraclasses}`}>
            <span className={`border px-2 py-0.5 rounded-full ${extraaddons}`}>
                {coinLogo}
            </span>
            {coinName}
        </span>
    )
}

export default Coincontent