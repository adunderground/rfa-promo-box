import React from 'react';

const PromoCard = ({ item }) => {

    console.log(item)

    const { category, image, description, link } = item;

    function clickHandler() {
        console.log('Hey Im leaving RFA');
        window.location.href = link;
    }

    return (
        <div className="promo-card" onClick={clickHandler}>
            <p className='promo-card__title'>{category}</p>
            <div className="promo-card__image">
                <img src={image} alt={description} />
            </div>
            <div className="promo-card__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default PromoCard;