import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { article } from '../../data/article.data';
import Blog from './Blog';
import './Blogs.css';

const Blogs = () => {
    return (
        <section>
            <Container>
                <div className="main-title">
                    <h2 className="text-center">Article</h2>
                </div>
                <Row>
                    {article.map((blog) => (
                        <Col md={4}>
                            <Blog {...blog} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
