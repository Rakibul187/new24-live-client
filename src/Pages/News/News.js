import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const News = () => {
    const news = useLoaderData()
    const { image_url, rating, author, category_id, details, title } = news;
    return (
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='text-muted d-flex justify-content-between'>
                    <p>{author?.name}</p>
                    <p>{author?.published_date}</p>
                    <p>{rating?.badge}</p>
                </div>
                <Link to={`/category/${category_id
                    }`}>
                    <Button variant="secondary">This Category All News</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;