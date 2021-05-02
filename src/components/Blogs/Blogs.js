import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { article } from '../../data/article.data';
import Blog from './Blog';
import './Blogs.css';

const Blogs = () => {
    return (
        <section id="blog">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">Article</h2>
                </div>
                <Row className="justify-content-center">
                    {article.map((blog) => (
                        <Col lg={4} className="mb-1" md={6} key={blog.id}>
                            <Blog {...blog} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
