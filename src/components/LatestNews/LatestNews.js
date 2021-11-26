import React from 'react';
import './LatestNews.css'


const LatestNews = () => {
    return (
        <div>
            <section className="section gray-bg" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2 className="fw-bold bg-success p-1 rounded text-white">Latest</h2>
                            <a className="btn btn-primary fw-bold m-1" href="#" role="button">For More</a>
                            <p className="bg-light rounded p-1 text-warning">Looking for the perfect Toure? These are the best vacation ideas check it from now</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">Januarry 21</div>
                                
                                    
                                
                            </div>
                            <div className="blog-info">
                                <h5><a className="bg-success text-white rounded p-1" href="#">Our Rain Event</a></h5>
                                <p>Pick up those hobbies you’ve been putting off. </p>
                                <img className="img-fluid rounded border" src="https://images.indianexpress.com/2021/05/Rain.jpg" alt=""/>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow btn btn-dark m-1">
                                        <span>Read More</span>
                                        <i className="arrow text-success"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">March 20</div>
                                <a href="#">
                                
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a className="bg-success text-white rounded p-1" href="#">Amazon Camp</a></h5>
                                <p>Whether you want to ski or get in the holiday spirit.</p>
                                <img className="img-fluid rounded border" src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/03/Intrepid-Travel-peru_amazon-jungle_DSC03674.jpg" alt=""/>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow btn btn-dark m-1">
                                        <span>Read More</span>
                                        <i className="arrow text-success"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">April 2</div>
                                
                                
                                
                            </div>
                            <div className="blog-info">
                                <h5><a className="bg-success text-white rounded p-1" href="#">Everest Camp</a></h5>
                                <p>St. Lucia's superb winter weather.</p>
                                <img className="img-fluid rounded border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A_yKVtenbvasuQR4Vcbfc0J2HM2kjIEohg&usqp=CAU" alt=""/>
                                <img className="img-fluid rounded border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A_yKVtenbvasuQR4Vcbfc0J2HM2kjIEohg&usqp=CAU" alt=""/>
                                <img className="img-fluid rounded border" src="https://i.insider.com/5ced3e4111e205059c543232?width=1136&format=jpeg" alt=""/>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow btn btn-dark m-1">
                                        <span>Read More</span>
                                        <i className="arrow text-success "></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="more">
       
        </section>
        </div>
    );
};

export default LatestNews;