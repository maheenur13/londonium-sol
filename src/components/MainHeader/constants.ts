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
    position?: [string];
}

export const galleryArray: HeaderItemProps[] = [
    {
        className: 'service-view',
        title: 'Family',
        gridColumn: '1',
        gridRow: '1',
        bgImage: '/images/bgImages/family.jpg',
    },
    {
        image: '/images/big-ben-tower.jpg',
        gridColumn: '1',
        gridRow: '2 / 5',
        position: ['-20px 0'],
        className: 'image-view',
    },
    {
        className: 'service-view',
        title: 'Medical Negligence',
        image: '',
        bgImage: '/images/bgImages/medical-negligence.jpg',
        gridColumn: '2 / 3',
        gridRow: '1 / 3',
    },
    {
        image: '/images/justice-shake.jpg',
        gridColumn: '2 / 4',
        gridRow: '3',
        position: ['0 -60px'],
        className: 'image-view',
    },
    {
        className: 'service-view',
        title: 'Personal Injury',
        gridColumn: '2 / 4',
        gridRow: '4',
        bgImage: '/images/bgImages/personal-injury.jpg',
    },
    {
        image: '/images/tower-bridge-view.jpg',
        gridColumn: '3 / 5',
        gridRow: '1 / 3',
        className: 'image-view',
    },
    {
        title: 'Immigration',
        image: '',
        gridColumn: '4 / 5',
        gridRow: '3 / 5',
        bgImage: '/images/bgImages/immigration.jpg',
    },
    {
        className: 'service-view',
        title: 'Housing Legal Aid',
        gridColumn: '5 / 6',
        gridRow: '1 / 3',
        bgImage: '/images/bgImages/housing-legal-aid.jpg',
    },
    {
        image: '/images/london-city.jpg',
        gridColumn: '5 / 7',
        gridRow: '3 / 5',
        className: 'image-view',
    },
    {
        image: '/images/legal-consult.jpg',
        gridColumn: '6 / 8',
        gridRow: '1 / 3',
        className: 'image-view',
    },
    {
        title: 'Mental Health',
        className: 'service-view',
        gridColumn: '7 / 8',
        gridRow: '3 / 5',
        bgImage: '/images/bgImages/mental-health.jpg',
    },
    {
        title: 'Civil Litigation',
        className: 'service-view',
        gridColumn: '8 / 9',
        gridRow: '1 / 2',
        bgImage: '/images/bgImages/civil-litigation.jpg',
    },
    {
        image: '/images/justice-statue.jpg',
        gridColumn: '8 / 9',
        gridRow: '2 / 4',
        position: ['-120px 0'],
        className: 'image-view',
    },
    {
        className: 'service-view',
        title: 'Crime',
        gridColumn: '8 / 9',
        gridRow: '4 / 5',
        bgImage: '/images/bgImages/crime.jpg',
    },
    {
        image: '/images/court.jpg',
        gridColumn: '9 / 10',
        gridRow: '1 / 3',
        className: 'image-view',
    },
    {
        className: 'service-view',
        title: 'Employment',
        gridColumn: '10 / 11',
        gridRow: '1 / 3',
        bgImage: '/images/bgImages/employment.jpg',
    },
    {
        className: 'service-view',
        title: 'Commercial Conveyancing',
        gridColumn: '9 / 11',
        gridRow: '3 / 5',
        bgImage: '/images/bgImages/commercial-conveyancing.jpg',
    },
];
