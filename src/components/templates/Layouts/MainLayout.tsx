import { FirstFooter, MainFooter, NavigationBar } from '@components/Includes';
import Icon, {
    homeNew,
    information,
    menuNew,
    phoneDialPad,
    solidMessenger,
    teams,
    user,
    userShared,
} from '@libs/icons';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const MainLayout: FC<PropsType> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Londonium Solicitors</title>
                <meta name='description' content='Londonium Solicitors' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Wrapper>
                <NavigationBar />
                <MainContent>
                    <div>
                        <main>{children}</main>
                    </div>
                    <FirstFooter />
                </MainContent>
                <div className='hover-section p-1'>
                    <div className='sidebar-main shadow'>
                        <Icon path={menuNew} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={homeNew} fill='#000000' className='my-3' width={28} height={28} />
                        <Icon path={information} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={user} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={teams} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={userShared} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={phoneDialPad} fill='#A9AEBA' className='my-3' width={28} height={28} />
                        <Icon path={solidMessenger} fill='#A9AEBA' className='my-3' width={28} height={28} />
                    </div>
                </div>

                <MainFooter />
            </Wrapper>
            {/* <SideBar></SideBar> */}
        </div>
    );
};

type PropsType = {
    children: ReactNode;
};

const MainContent = styled.div`
    position: relative;
`;
const Wrapper = styled.div`
    .hover-section {
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 10%;
        width: 66px;
        background-color: transparent;
        padding: 0.525rem;
        display: flex;
        flex-direction: column;
        /* align-items: space-between;
        justify-content: center; */
        /* border: 0.5px solid #c22d2d; */
        height: 80%;
        transition: 0.5s;
        .sidebar-main {
            position: absolute;
            right: -200px;
            top: 0;
            width: 55px;
            background-color: #ffffff;
            padding: 0.525rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border: 0.5px solid #dadada;
            height: 100%;
            transition: 0.5s;
            border-radius: 5px;
        }
        &:hover {
            .sidebar-main {
                right: 0;
            }
        }
    }
`;
const SideBar = styled.div``;
