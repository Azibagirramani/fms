const FundsTable = () => {
    const status = 'green';
    const icon = 'eye'
    return (
        <div className="whole_table">
            <div className="table_header px-3 py-2 ">
                <p>S/N</p>
                <p>PROJECT NAME</p>
                <p> Purpose</p>
                <p>MileStone</p>
                <p>Request Date</p>
                <p>Amount Requested</p>
                <p className="ms-3">status</p>

            </div>
            <div className="table_content mb-1 px-3 pt-3">
                <p>1</p>
                <p>Lorem ipsum dolor sit amet consecihil.</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <p>big stuff</p>
                <p>1/12/2016</p>
                <p className="ms-3">N60,000</p>
                <div className="progress me-5 mt-1">
                    <div className="progress-bar " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p><i className='bx bx-edit bx-md'></i> </p>

            </div>
            <div className="table_content mb-1 px-3 pt-3">
                <p>2</p>
                <p>Lorem ipsum dolor sit amet consecihil.</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <p>lil stuff</p>
                <p>1/12/2018</p>
                <p className="ms-3">N50,000</p>
                <div className="progress me-5 mt-1">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p><i className='bx bxs-droplet-half bx-md'></i> </p>

            </div>
        </div>
    );
}

export default FundsTable;