interface GalleryItem {
    className: string;
    title?: string; // title is optional
    image?: string; // image is optional
    bgImage?: string; // bgImage is optional
}

export const galleryArray: GalleryItem[] = [
    {
        className: 'one',
        title: 'Family',
        bgImage: '/images/family-law-in-italy.jpg',
    },
    {
        className: 'two',
        image: '/images/image-1.png',
    },
    {
        className: 'three',
        title: 'Medical Negligence',
        bgImage: '/images/bg-image-1.png',
    },
    {
        className: 'four',
        title: 'Mental Health',
        bgImage: '/images/mental.jpg',
    },
    {
        className: 'five',
        title: 'Employment',
        bgImage: '/images/employment.webp',
    },
    {
        className: 'six',
        title: 'Housing Legal Aid',
        bgImage: '/images/legal-aid.jpg',
    },
    {
        className: 'seven',
        title: 'Personal Injury',
        bgImage: '/images/personal-injury.jpg',
    },
    {
        className: 'eight',
        image: '/images/image-3.png',
    },
    {
        className: 'nine',
        image: '/images/image-4.png',
    },
    {
        className: 'ten',
        title: 'Crime',
        bgImage: '/images/crime.png',
    },
    {
        className: 'eleven',
        title: 'Commercial Conveyancing',
        bgImage: '/images/conveyancing-commercial.jpg',
    },
    {
        className: 'twelve',
        title: 'Civil Litigation',
    },
];
