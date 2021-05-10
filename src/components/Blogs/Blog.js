import React from 'react';
import { Card } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Blog = ({ title, desc, image, link }) => {
    return (
        <Fade>
            <Card className="blog mb-4">
                <div className="blog-img">
                    <Card.Img variant="top" src={image} alt={title} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                        <a
                            href={link}
                            className="main-color"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See More
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fade>
    );
};

export default Blog;
