import React from 'react';
import PromoCard from './PromoCard';
import './style.scss';

const PromoBox = ({ items }) => {

    return (
        <div className='promo-box'>
            {items.map((rfaPromoBoxItem, index) =>
                <PromoCard item={rfaPromoBoxItem} key={index} />
            )}
        </div>
    )
}

export default PromoBox;