
const Dashboard = () => {
    return (
        <div className="p-4">
            <div className="cards_container">

                <div className="cards text-white mb-3" >
                    <div className="cards-header ">Pending request</div>
                    <div className="card-body p-3 d-flex justify-content-between">
                        <div className="ps-2">
                            <p className="fs-3 fw-bold">50</p>
                            <p className="fs-6">-25%</p>
                        </div>
                        <div>
                            <i class='bx bx-time-five bx-lg pt-4' ></i>
                        </div>

                    </div>
                </div>
                <div className="cards text-white mb-3" style={{backgroundColor: 'rgb(1,179,211)'}} >
                    <div className="cards-header ">Approved request</div>
                    <div className="card-body p-3 d-flex justify-content-between">
                        <div className="ps-2">
                            <p className="fs-3 fw-bold">231</p>
                            <p className="fs-6">+7%</p>
                        </div>
                        <div>
                        <i class='bx bx-check-circle bx-lg pt-4' ></i>
                        </div>

                    </div>
                </div>
                <div className="cards text-white mb-3" style={{backgroundColor: 'rgb(2,188,119)'}} >
                    <div className="cards-header ">Disbursed funds</div>
                    <div className="card-body p-3 d-flex justify-content-between">
                        <div className="ps-2">
                            <p className="fs-3 fw-bold">155K</p>
                            <p className="fs-6">+25%</p>
                        </div>
                        <div>
                        <i class='bx bx-down-arrow-circle bx-lg pt-4' ></i>
                        </div>

                    </div>
                </div>
                <div className="cards text-white mb-3" style={{backgroundColor:'rgb(230,57,70)'}} >
                    <div className="cards-header ">Rejected Request</div>
                    <div className="card-body p-3 d-flex justify-content-between">
                        <div className="ps-2">
                            <p className="fs-3 fw-bold">4234</p>
                            <p className="fs-6">+19%</p>
                        </div>
                        <div>
                        <i class='bx bx-x-circle bx-lg pt-4'></i>
                        </div>

                    </div>
                </div>
                <div className="cards text-white mb-3" style={{backgroundColor:'rgb(7,59,76)'}} >
                    <div className="cards-header ">Expended</div>
                    <div className="card-body p-3 d-flex justify-content-between">
                        <div className="ps-2">
                            <p className="fs-3 fw-bold">4234k</p>
                            <p className="fs-6">+19%</p>
                        </div>
                        <div>
                        <i class='bx bx-up-arrow-circle bx-lg pt-4' ></i>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;