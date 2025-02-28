import { BrandLogo } from '@components/Atoms';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styled from 'styled-components';
import { navItems } from './constants';

export const NavigationBar: FC = () => {
    const [searchText, setSearchText] = useState<string | null>(null);
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = (event: any) => {
                const targetId = event.target.getAttribute('href');
                console.log({ targetId });

                if (targetId) {
                    event.preventDefault(); // Prevent default anchor click behavior
                    const targetSection = document.querySelector(targetId.replace('/', '')); // Select the target section
                    if (!targetSection) {
                        return;
                    }
                    // Scroll to the target section
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Smooth scroll
                        block: 'start', // Align to the start of the section
                    });
                }
            };

            const links = document.querySelectorAll('nav a');
            links.forEach((link) => {
                link.addEventListener('click', handleScroll);
            });

            return () => {
                links.forEach((link) => {
                    link.removeEventListener('click', handleScroll);
                });
            };
        }
    }, []);
    return (
        <>
            <NavbarWrapper key='big' expand='lg'>
                <Container>
                    <Navbar.Brand href='/'>
                        <BrandLogo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement='end'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                <Image src={'/images/main-logo.png'} alt='image' width={200} height={50} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-center flex-grow-1 pe-3 '></Nav>
                            <Nav>
                                {navItems.map((item, idx) => (
                                    <Link className='p-2' key={idx} href={`#${item.slug}`}>
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
    background-color: #0e0e0e !important;
    padding: 1.5rem 0;
    a {
        text-decoration: none;
        color: var(--bs-white);
        margin: 0 0.155rem;
        &:hover {
            color: var(--bs-primary);
        }
    }
`;
