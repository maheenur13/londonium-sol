type Grid = {
    gridColumn: string;
    gridRow: string;
};

export interface HeaderItemProps {
    bgColor?: string;
    gridColumn: string;
    gridRow: string;
    hoverimage?: string;
    className?: string;
    title?: string;
    image?: string;
    bgImage?: string;
    position?: [string];
    slug?: string;
    id?: string;
}

export const galleryArray: HeaderItemProps[] = [
    {
        className: 'service-view',
        title: 'Family',
        gridColumn: '1',
        gridRow: '1',
        slug: 'family-service',
        bgImage: '/images/bgImages/family.jpg',
        id: 'family-service',
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
        slug: 'medical-negligence',
        id: 'medical-negligence',
    },
    {
        image: '/images/justice-shake.jpg',
        gridColumn: '2 / 4',
        gridRow: '3',
        position: ['0 -45px'],
        className: 'image-view',
    },
    {
        className: 'service-view',
        title: 'Personal Injury',
        gridColumn: '2 / 4',
        gridRow: '4',
        bgImage: '/images/bgImages/personal-injury.jpg',
        slug: 'personal-injury',
        id: 'personal-injury',
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
        id: 'immigration',
        slug: 'immigration',
    },
    {
        className: 'service-view',
        title: 'Housing Legal Aid',
        gridColumn: '5 / 6',
        gridRow: '1 / 3',
        slug: 'housing-legal-aid',
        bgImage: '/images/bgImages/housing-legal-aid.jpg',
        id: 'housing-legal-aid',
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
        slug: 'mental-health',
        bgImage: '/images/bgImages/mental-health.jpg',
        id: 'mental-health',
    },
    {
        title: 'Civil Litigation',
        className: 'service-view',
        gridColumn: '8 / 9',
        gridRow: '1 / 2',
        slug: 'civil-litigation',
        bgImage: '/images/bgImages/civil-litigation.jpg',
        id: 'civil-litigation',
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
        slug: 'crime',
        id: 'crime',
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
        slug: 'employment',
        bgImage: '/images/bgImages/employment.jpg',
        id: 'employment',
    },
    {
        className: 'service-view',
        title: 'Commercial Conveyancing',
        gridColumn: '9 / 11',
        gridRow: '3 / 5',
        slug: 'commercial-conveyancing',
        bgImage: '/images/bgImages/commercial-conveyancing.jpg',
        id: 'commercial-conveyancing',
    },
];

export type MobileGallery = {
    [view: string]: Array<HeaderItemProps>;
};

export const mobileGallery: MobileGallery = {
    ['view-1']: [
        {
            title: 'Civil Litigation',
            className: 'service-view',
            gridColumn: '1 / 6',
            gridRow: '1 / 3',
            slug: 'civil-litigation',
            bgImage: '/images/bgImages/civil-litigation.jpg',
            id: 'civil-litigation',
        },
        {
            image: '/images/london-city.jpg',
            gridColumn: '6 / 12',
            gridRow: '1 / 5',
            position: ['-20px 0'],
            className: 'image-view',
        },

        {
            image: '/images/big-ben-tower.jpg',
            gridColumn: '1 / 6',
            gridRow: '3 / 7',
            className: 'image-view',
        },
        {
            title: 'Immigration',
            image: '',
            gridColumn: '6 / 12',
            gridRow: '5 / 7',
            bgImage: '/images/bgImages/immigration.jpg',
            id: 'immigration',
            slug: 'immigration',
        },
    ],
    ['view-2']: [
        {
            title: 'Medical Negligence',
            className: 'service-view',
            gridColumn: '1 / 6',
            gridRow: '1 / 3',
            slug: 'medical-negligence',
            bgImage: '/images/bgImages/medical-negligence.jpg',
            id: 'medical-negligence',
        },
        {
            // image: '/images/big-ben-tower.jpg',
            image: '/images/legal-consult.jpg',
            gridColumn: '6 / 12',
            gridRow: '1 / 5',
            position: ['-20px 0'],
            className: 'image-view',
        },

        {
            image: '/images/justice-statue.jpg',
            gridColumn: '1 / 6',
            gridRow: '3 / 7',
            className: 'image-view',
            position: ['-100px '],
        },
        {
            title: 'Personal Injury',
            image: '',
            gridColumn: '6 / 12',
            gridRow: '5 / 7',
            bgImage: '/images/bgImages/personal-injury.jpg',
            id: 'personal-injury',
            slug: 'personal-injury',
        },
    ],

    ['view-3']: [
        {
            title: 'Mental Health',
            className: 'service-view',
            gridColumn: '1 / 6',
            gridRow: '1 / 3',
            slug: 'mental-health',
            bgImage: '/images/bgImages/mental-health.jpg',
            id: 'mental-health',
        },
        {
            // image: '/images/big-ben-tower.jpg',
            image: '/images/tower-bridge-view.jpg',
            gridColumn: '6 / 12',
            gridRow: '1 / 5',
            position: ['-20px 0'],
            className: 'image-view',
        },
        {
            title: 'Family',
            className: 'service-view',
            gridColumn: '1 / 6',
            gridRow: '3 / 5',
            slug: 'family-service',
            bgImage: '/images/bgImages/mental-health.jpg',
            id: 'family-service',
        },

        {
            image: '/images/justice-statue.jpg',
            gridColumn: '1 / 6',
            gridRow: '5 / 7',
            className: 'image-view',
            // position: ['-100px '],
        },
        {
            title: 'Housing Legal Aid',
            image: '',
            gridColumn: '6 / 12',
            gridRow: '5 / 7',
            bgImage: '/images/bgImages/housing-legal-aid.jpg',
            id: 'housing-legal-aid',
            slug: 'housing-legal-aid',
        },
    ],
    ['view-4']: [
        {
            className: 'image-view',
            gridColumn: '1 / 6',
            gridRow: '1 / 3',
            slug: 'mental-health',
            image: '/images/tower-bridge-view.jpg',
        },

        {
            title: 'Crime',
            className: 'service-view',
            gridColumn: '1 / 6',
            gridRow: '3 / 5',
            slug: 'crime',
            bgImage: '/images/bgImages/crime.jpg',
            id: 'crime',
        },

        {
            title: 'Commercial Conveyancing',
            bgImage: '/images/justice-statue.jpg',
            gridColumn: '1 / 6',
            gridRow: '5 / 7',
            className: 'service-view',
            slug: 'crime',
            id: 'crime',
        },
        {
            image: '/images/justice-shake.jpg',
            gridColumn: '6 / 12',
            gridRow: '3 / 7',

            position: ['-120px 0'],
            className: 'image-view',
        },
        {
            title: 'Employment',
            image: '',
            gridColumn: '6 / 12',
            gridRow: '1 / 3',
            bgImage: '/images/bgImages/personal-injury.jpg',
            id: 'employment',
            slug: 'employment',
        },
    ],
};
