import '../Offer-plan/Offerplan.css';

function OfferPlan() {
    return (
        <div className="row offer-plan">
            {/* Standard Plan */}
            <div className="col-12 justify-content-center">
                <div className="border rounded pt-5 pb-2 mb-4 px-2 offer-plan-card" >
                    <h4 className="card-heading px-2">STANDARD PLAN</h4>
                    <div className="row py-4 px-2 inner-text">
                        <span className="pb-3">Whats Included : </span>
                        <span className="pb-3"><i class="bi bi-chevron-right"></i> Complete Guidance</span>
                        <span className="pb-3"><i class="bi bi-chevron-right"></i> SOP &amp; LOR Provided</span>
                        <span className="pb-3"><i class="bi bi-chevron-right"></i> 5 Applications Allowed</span>
                        <span className="pb-3"><i class="bi bi-chevron-right"></i> Visa &amp; Travel Guidance</span>
                    </div>
                    <a href="/" className="row border bg py-3 mt-3 mx-auto text-decoration-none text-dark">
                        <div className="col-6 d-flex justify-content-start card-heading"> ₹50000</div>
                        <div className="col-6 d-flex justify-content-end card-heading "> Go <i class="bi bi-arrow-right"></i></div>

                    </a>
                </div>
            </div>
            
        </div>
    )
}


export default OfferPlan;