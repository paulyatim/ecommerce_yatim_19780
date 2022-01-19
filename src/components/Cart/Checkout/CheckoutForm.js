const CheckoutForm = ({handleSubmit, handleChange, formValues, formError}) => {
    return (
        <div>
            <div className="modal-header">
                <h5 className="modal-title">Check Out</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit} id="checkoutForm">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text" 
                            className="form-control" 
                            name="name"
                            id="orderName" 
                            aria-describedby="emailHelp" 
                            value={formValues.name}
                            onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            id="orderEmailAddress" 
                            aria-describedby="emailHelp" 
                            value={formValues.email}
                            onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="confirmEmail"
                            id="orderConfirmEmailAddress" 
                            aria-describedby="emailHelp" 
                            value={formValues.confirmEmail}
                            onChange={handleChange}/>
                    </div>
                    <p>{formError}</p>
                    <button type="submit" className="btn btn-primary">Make Order</button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm;