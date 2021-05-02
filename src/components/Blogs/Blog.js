import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = ({ title, desc, image, link, aosProps }) => {
    return (
        <Card className="blog mb-4" data-aos={aosProps}>
            <div className="blog-img">
                <Card.Img variant="top" src={image} alt={title} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                    <a href={link} target="_blank" rel="noreferrer">
                        See More
                    </a>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Blog;
