import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styled from 'styled-components';
import { navItems } from './constants';

export const NavigationBar: FC = () => {
    return (
        <>
            <NavbarWrapper key='big' expand='md' className='mb-3 px-3'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <Image src='/images/main-logo.png' width={191} height={40} alt='main-logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement='end'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-center flex-grow-1 pe-3 '>
                                <SearchBox>
                                    <input placeholder='Search' />
                                    <Image src='/svg/mic.svg' width={26} height={22} alt='logo' />
                                    <BgImage src='/svg/search.svg' width={18} height={18} alt='logo' />
                                </SearchBox>
                                {/* <Form className='d-flex'>
                                <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
                                <Button variant='outline-success'>Search</Button>
                            </Form> */}
                            </Nav>
                            <Nav>
                                {navItems.map((item, idx) => (
                                    <Link className='p-2' key={idx} href={item.slug}>
                                        {item.title}
                                    </Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </NavbarWrapper>
        </>
    );
};

const NavbarWrapper = styled(Navbar)`
    background-color: #f0f0f0 !important;
    a {
        text-decoration: none;
        color: var(--bs-dark);
        margin: 0 0.155rem;
    }
`;

const SearchBox = styled.div`
    position: relative;
    background-color: var(--bs-white);
    padding: 0.425rem 0.825rem;
    border-radius: 9px;
    display: flex;
    align-items: center;

    input {
        outline: none;
        border: none;

        &::placeholder {
            text-align: center;
            color: #88888c;
        }
    }
`;

const BgImage = styled(Image)`
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 28%; /* position the left edge of the element at the middle of the parent */
    color: #88888c;
    transform: translate(-50%, -50%);
`;
