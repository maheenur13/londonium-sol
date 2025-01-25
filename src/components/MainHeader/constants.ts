export interface HeaderItemProps {
    bgColor?: string;
    gridColumn: string;
    gridRow: string;
    backImage?: string;
    hoverimage?: string;
    className?: string;
    title?: string;
    image?: string;
    bgImage?: string;
}

export const galleryArray: HeaderItemProps[] = [
    {
        title: 'Family',
        gridColumn: '1',
        gridRow: '1',
    },
    {
        image: '/images/image-1.png',
        gridColumn: '1',
        gridRow: '2 / 5',
    },
    {
        title: 'Medical Negligence',
        image: '',
        bgImage: '/images/bg-image-1.png',
        gridColumn: '2 / 3',
        gridRow: '1 / 3',
    },
    {
        image: '/images/image-1.png',
        bgImage: '/images/bg-image-1.png',
        gridColumn: '2 / 4',
        gridRow: '3',
    },
    {
        image: '/images/image-2.png',
        gridColumn: '2 / 4',
        gridRow: '4',
    },
    {
        title: 'Employment',
        image: '',
        gridColumn: '3 / 5',
        gridRow: '1 / 3',
    },
    {
        title: 'Immigration',
        image: '',
        gridColumn: '4 / 5',
        gridRow: '3 / 5',
    },
    {
        title: 'Personal Injury',
        image: '',
        gridColumn: '5 / 6',
        gridRow: '1 / 3',
    },
    {
        image: '/images/image-3.png',
        gridColumn: '5 / 7',
        gridRow: '3 / 5',
    },
    {
        image: '/images/image-4.png',
        gridColumn: '6 / 8',
        gridRow: '1 / 3',
    },
    {
        title: 'Crime',
        image: '',
        gridColumn: '7 / 8',
        gridRow: '3 / 5',
    },
    {
        title: 'Conveyancing',
        image: '',
        gridColumn: '8 / 9',
        gridRow: '1 / 2',
    },
    {
        image: '',
        gridColumn: '8 / 9',
        gridRow: '2 / 4',
    },
    {
        title: 'Civil Litigation',
        image: '',
        gridColumn: '8 / 9',
        gridRow: '4 / 5',
    },
    {
        image: '',
        gridColumn: '9 / 10',
        gridRow: '1 / 3',
    },
    {
        image: '',
        gridColumn: '10 / 11',
        gridRow: '1 / 3',
    },
    {
        image: '',
        gridColumn: '9 / 11',
        gridRow: '3 / 5',
    },
];
