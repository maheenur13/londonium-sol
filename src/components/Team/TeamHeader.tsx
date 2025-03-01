import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const TeamHeader = () => {
    return (
        <Wrapper>
            <Row>
                <Col className='mx-auto' sm={8}>
                    <Title>MEET OUR TEAM</Title>
                </Col>
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Title = styled.h1``;
