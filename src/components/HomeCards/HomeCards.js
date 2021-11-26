import React, { useEffect, useState } from 'react';
import HomeCardsData from '../HomeCardsData/HomeCardsData';

const HomeCards = () => {
    const [cardData, setcardData] = useState([])
    
    // LOADE data
    useEffect(() =>{
        fetch('/cardsData.JSON')
        .then(res=>res.json())
        .then(data=> setcardData(data))
    }, [])
    
    return (
        <div className="containear bg-light ">
        <div className="row gx-5">
            <div className="col-lg-12 ">
                <div className="row gx-2 px-3">
                    {
                        cardData.map(cardData => <HomeCardsData
                            key={cardData.key}
                            cardData={cardData}
                        ></HomeCardsData>)
            }
            </div>
        </div>
            
    </div>
    </div>
    );
};

export default HomeCards;