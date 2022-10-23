import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    console.log(allNews)
    return (
        <div>
            <h2>News24 Live {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;