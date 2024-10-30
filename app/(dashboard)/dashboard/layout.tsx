import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
    return (
        <div>
            <p className="text-3xl">Dashboard Nav Bar</p>
            {children}
        </div>
    )
}

export default layout