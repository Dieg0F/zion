

import React from 'react';
import FeedPost from '../FeedPost';
import { FeedItem } from '../../../Models/FeedItem';

import './styles.scss';

interface Props {
}

const Feed: React.FC<Props> = () => {

    const feedList = () => {
        const feedPosts = [];
        for (let i = 200; i <= 216; i++) {
            const feedItem: FeedItem = {
                imageUrl: `images/img_${i}.jpg`,
                imageAlt: `Feed Item N° ${i}`,
                postData: {},
                postMessage: `Lorem Ipsom indolor...`
            }

            feedPosts.push(<FeedPost {...{ feedItem }} key={i} />);
        }

        return feedPosts;
    }

    return (
        <section className="profile-feed-content">
            {feedList()}
        </section>
    )
};

export default Feed

