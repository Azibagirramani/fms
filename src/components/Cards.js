
function Cards({ bgColor, header, icon, percentage, value }){
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className={`card text-white border-0 card-custom`}>
                <div className="card-header bg-transparent p-0">
                    <p className="m-0 py-2 px-3 fs-6 fw-light">{header}</p>
                </div>
                <div className="card-body d-flex py-3 justify-content-between align-items-center">
                    <div className="d-flex flex-column lh-base">
                        <p className="fs-5 fw-bold m-0">{ value }</p>
                        <p className="mb-1">{percentage}</p>
                    </div>
                    <i className={`bx ${icon} fs-1`}></i>
                </div>
            </div>
        </>
    )
}

export default Cards
