

import React, { useState, useEffect } from 'react';
import { FeedItem } from '../../../Models/FeedItem';

import './styles.scss';

interface Props {
    feedItem: FeedItem;
}

const FeedPost: React.FC<Props> = ({ feedItem }) => {

    return (
        <section className="profile-feed-item-content">
            <div className="feed-item-image" style={{ backgroundImage: `url('${feedItem.imageUrl}')` }}></div>
            <div className="feed-item-hover"></div>
        </section>
    )
};

export default FeedPost
