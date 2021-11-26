import React from 'react';


const MoreService = () => {
    return (
        <div className="video" style={{}}>
          <br />
          <h5 className="h1 text-white bg-success p-1 text-center fw-bold"> Events </h5>

               <div className="row">
                 <div className="col-lg-6">
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/W61kjH33qMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 <img className="img-fluid" src="https://static.vecteezy.com/system/resources/previews/000/201/208/non_2x/vector-beach-vacation-illustration.jpg" alt=""/>
                 </div>
                 <div className="col-lg-6">
                   <img className="img-fluid" src="https://thumbs.dreamstime.com/b/people-planning-concept-entrepreneurship-calendar-schedule-vector-business-meeting-events-organizing-filling-course-160993060.jpg" alt=""/>
                   <img className="img-fluid" src="https://img.freepik.com/free-vector/couple-enjoying-holidays-beach_1150-39561.jpg?size=626&ext=jpg" alt=""/>
                  
                 </div>
               </div>

               <h2 className="fw-bold text-center text-warning bg-success p-1">For Pre-Booking Contact Us Now</h2>

      </div>
    );
};

export default MoreService;
