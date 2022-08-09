import React from 'react'

const FAQ = () => {
  return (
    <div id="faq" className='bg-amber-100 h-auto py-12'>
        <h3 className="text-5xl font-mont font-bold text-amber-900 pb-4">ENQUIRY </h3>
        
        <div id="accordion" className="w-2/3 mx-auto">
            <div className="card">
                <div className="card-header bg-yellow-700 font-pop font-bold">
                <a className="btn text-light" data-bs-toggle="collapse" href="#collapseOne">
                    Where are your offices Located?
                </a>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                    <p>
                        <b>Head Office: </b>
                    Azueke Ndume, Ibeku Opp. Timber Market,
                    P.O Box 2922, Umuahia, Abia State, Nigeria
                    </p>
                    <p>
                       <b>Branch Office:</b> 
                        1, Ojike Street, Umuahia, Abia State
                    </p>
                    
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header font-pop font-bold">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                        What is CasaMeal?
                    </a>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                <div className="card-body ">
                    <p> Casameal is a highly nutritive flour meal made from cassava flour. One of its top advantage is that it contains less sugar and it's good for Diabetic Patients</p>
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-yellow-700 font-pop font-bold">
                <a className="collapsed btn text-light" data-bs-toggle="collapse" href="#collapseThree">
                    Do you offer Nationwide Delivery?
                </a>
                </div>
                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    <p>Yes, we offer delivery within and outside Nigeria.</p>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header font-pop font-bold">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                        Is CasaMeal Registered by NAFDAC?
                    </a>
                </div>
                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                <div className="card-body ">
                    <p>Yes we are fully endorsed by NAFDAC</p>
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-yellow-700 font-pop font-bold ">
                <a className="collapsed btn text-light" data-bs-toggle="collapse" href="#collapseFive">
                    How Can I be a Distributor?
                </a>
                </div>
                <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    <p>You can contact us via <b>email:info@ahuiziinvest.com</b></p>
                </div>
                </div>
            </div>

            

        </div>

    </div>
  )
}

export default FAQ