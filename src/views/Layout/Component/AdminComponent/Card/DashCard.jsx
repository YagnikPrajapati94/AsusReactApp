import React from 'react'

const DashCard = ({className,title,titlenum}) => {
    return (
        <>
            <div className="col-lg-3 my-lg-0 my-2">
                <div className={`card p-4 text-center  border-0 rounded-0 bg-info bg-opacity-25 ${className}`}>
                    <p className='m-0 fs-4'>{title} </p>
                    <p className='m-0 fs-4 border bg-light bg-opacity-50 my-3'>{titlenum}</p>
                </div>
            </div>
        </>
    )
}

export default DashCard
