import React from 'react';

const HomeCardData = () => {

    const { name, img, category, price, enroll } = props.cardData;
    return (
        <div className="container col-lg-4 py-2 card-style ">
        <div className="card h-100 text-center border-2 border-secondary shadow ">
            <img className="img-fluid rounded-2" src={img} alt="" />
            <div className="card-body">
                <div className="card-title border ">
                <h5 className="fw-thin">{category}</h5>
                    <h3 className="fw-bold"> {name}</h3>
                    <h4 className="fw-bold">Price: $<span className="text-danger">
                    {price}</span> </h4>
                    <h5 className="fw-bold"> <span className="text-success"> {} </span></h5>
                    <h5 className="fw-bold"> Enrolled:<span className="text-danger">
                    {enroll}</span> </h5>
                </div>
                
            </div>
            <div className="card-footer bg-light border-0 ">
                <button type="button" id="btn-style" class="btn btn-success" >
                    <span className="text-danger">  </span> Details</button>
                </div>
        </div>
    </div>
    );
};

export default HomeCardData;