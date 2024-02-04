export const propertyTypeCategory = [
    {
        title: "Popular",
        subCats: [
            {
                title: "Canmore",
                link: "",
            },
            {
                title: "Benalmádena",
                link: "",
            },
            {
                title: "Marbella",
                link: "",
            },
            {
                title: "Mijas",
                link: "",
            },
            {
                title: "Prescott",
                subCat: "Cabin rentals",
                link: "",
            },
            {
                title: "Scottsdale",
                subCat: "House rentals",
                link: "",
            },
            {
                title: "Tucson",
                link: "",
            },
            {
                title: "Jasper",
                link: "",
            },
            {
                title: "Mountain View",
                link: "",
            },
            {
                title: "Devonport",
                link: "",
            },
            {
                title: "Mallacoota",
                subCat: "Pet-friendly rentals",
                link: "",
            },
            {
                title: "Ibiza",
                subCat: "Apartment rentals",
                link: "",
            },
            {
                title: "Anaheim",
                link: "",
            },
            {
                title: "Benalmádena",
                link: "",
            },
            {
                title: "Monterey",
                link: "",
            },
            {
                title: "Paso Robles",
                link: "",
            },
            {
                title: "Santa Barbara",
                subCat: "Beach house rentals",
                link: "",
            },
            {
                title: "Show more",
                link: "",
                isArrow: true,
            },
        ],
    },
    {
        title: "Arts & culture",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Outdoors",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Mountains",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Beach",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Unique stays",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Categories",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Things to do",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
    {
        title: "Airbnb-friendly apartments",
        subCats: [
            {
                title: "",
                link: "",
            },
        ],
    },
];

export const categoryList = [
    { name: "Amazing views", icon: "/icons/amazing-view.svg", active: "/icons/amazing-view-active.svg" },
    { name: "National parks", icon: "/icons/national-parks.svg", active: "/icons/national-parks-active.svg" },
    { name: "Beach", icon: "/icons/beach.svg", active: "/icons/beach-active.svg" },
    { name: "Lake", icon: "/icons/lake.svg", active: "/icons/lake-active.svg" },
    { name: "Caves", icon: "/icons/caves.svg", active: "/icons/caves-active.svg" },
    { name: "Islands", icon: "/icons/islands.svg", active: "/icons/islands-active.svg" },
    { name: "Apartment", icon: "/icons/earth-homes.svg", active: "/icons/earth-homes-active.svg" },
    { name: "Campers", icon: "/icons/campers.svg", active: "/icons/campers-active.svg" },
    { name: "Castles", icon: "/icons/castles.svg", active: "/icons/castles-active.svg" },
    { name: "Earth homes", icon: "/icons/earth-homes.svg", active: "/icons/earth-homes-active.svg" },
];

export interface Property {
    id: number;
    name: string;
    description: string;
    amenities: string[];
    pricePerNight: number;
    location: string;
    state: string;
    propertyType: string;
    startDate: string;
    endDate: string;
    guests: number;
    propertyImages: string[];
    ratings: number[];
}

export const propertyList: Property[] = [
    {
        id: 1,
        name: 'Cozy Cabin in the Woods',
        description: 'Escape to nature in this charming cabin surrounded by trees.',
        amenities: ['Fireplace', 'Nature Trails', 'Pet Friendly'],
        pricePerNight: 80,
        location: 'Dhaka',
        state: 'Natureland',
        propertyType: 'Amazing views',
        startDate: 'Feb 14, 2024',
        endDate: 'Feb 18, 2024',
        guests: 6,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.8, 4.5, 4.7, 5, 4.2]
    },
    {
        id: 2,
        name: 'Beachfront Villa with Panoramic Views',
        description: 'Enjoy stunning ocean views from this luxurious beachfront villa.',
        amenities: ['Private Beach Access', 'Infinity Pool', 'Sun Deck'],
        pricePerNight: 200,
        location: 'Chattogram',
        state: 'Heritage City',
        propertyType: 'Lake',
        startDate: 'Feb 16, 2024',
        endDate: 'Feb 22, 2024',
        guests: 6,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [5, 4.9, 5, 4.8, 5]
    },
    {
        id: 3,
        name: 'Mountain Retreat with Hot Tub',
        description: 'Unwind in the mountains with a hot tub and scenic views.',
        amenities: ['Mountain Views', 'Hot Tub', 'Hiking Trails'],
        pricePerNight: 120,
        location: 'Rangpur',
        state: 'Mountain Haven',
        propertyType: 'Campers',
        startDate: 'Feb 20, 2024',
        endDate: 'Feb 25, 2024',
        guests: 4,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.7, 4.5, 4.8, 5, 4.2]
    },
    {
        id: 4,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka',
        state: 'Cityscape',
        propertyType: 'Islands',
        startDate: 'March 14, 2024',
        endDate: 'March 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 5,
        name: 'Riverside Cottage with Tranquil Setting',
        description: 'Relax by the river in this cozy cottage with a peaceful atmosphere.',
        amenities: ['River Views', 'Fire Pit', 'Kayaking'],
        pricePerNight: 90,
        location: 'Riverbank Retreat',
        state: 'Riverside Haven',
        propertyType: 'Caves',
        startDate: 'Feb 18, 2024',
        endDate: 'Feb 23, 2024',
        guests: 2,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.6, 5, 4.8, 4.7, 4.9]
    },
    {
        id: 6,
        name: 'Historic Mansion with Vintage Charm',
        description: 'Step back in time in this grand mansion with vintage aesthetics.',
        amenities: ['Historic Architecture', 'Gardens', 'Library'],
        pricePerNight: 180,
        location: 'Historical District',
        state: 'Heritage City',
        propertyType: 'Lake',
        startDate: 'Feb 22, 2024',
        endDate: 'Feb 28, 2024',
        guests: 8,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.8, 5, 4.7, 4.9, 4.5]
    },
    {
        id: 7,
        name: 'Ski Chalet in Winter Wonderland',
        description: 'Experience winter magic in this ski chalet surrounded by snow-capped mountains.',
        amenities: ['Ski-In/Ski-Out', 'Hot Cocoa Bar', 'Sauna'],
        pricePerNight: 250,
        location: 'Snowy Peaks',
        state: 'Winter Wonderland',
        propertyType: 'Beach',
        startDate: 'Feb 15, 2024',
        endDate: 'Feb 21, 2024',
        guests: 6,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 5, 4.8, 5, 4.7]
    },
    {
        id: 8,
        name: 'Eco-Friendly Treehouse in the Forest',
        description: 'Connect with nature in this unique eco-friendly treehouse.',
        amenities: ['Treehouse Living', 'Nature Walks', 'Solar Power'],
        pricePerNight: 110,
        location: 'Enchanted Forest',
        state: 'Greenwood',
        propertyType: 'National parks',
        startDate: 'Feb 19, 2024',
        endDate: 'Feb 25, 2024',
        guests: 2,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.7, 4.5, 4.9, 4.8, 4.6]
    },
    {
        id: 9,
        name: 'Secluded Beach House with Private Shoreline',
        description: 'Escape to a secluded beach house with your own private shoreline.',
        amenities: ['Private Beach Access', 'Infinity Pool', 'BBQ Area'],
        pricePerNight: 220,
        location: 'Hidden Cove',
        state: 'Oceanfront Oasis',
        propertyType: 'Amazing views',
        startDate: 'Feb 16, 2024',
        endDate: 'Feb 22, 2024',
        guests: 8,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [5, 4.9, 5, 4.8, 5]
    },
    {
        id: 10,
        name: 'Scenic Vineyard Retreat with Wine Tasting',
        description: 'Stay in a picturesque vineyard retreat and enjoy wine tasting.',
        amenities: ['Vineyard Views', 'Wine Tasting Tours', 'Outdoor Dining'],
        pricePerNight: 160,
        location: 'Vineyard Valley',
        state: 'Wine Country',
        propertyType: 'Earth homes',
        startDate: 'Feb 14, 2024',
        endDate: 'Feb 20, 2024',
        guests: 4,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.8, 4.7, 4.5, 5, 4.9]
    },
    {
        id: 11,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka City',
        state: 'Cityscape',
        propertyType: 'Apartment',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 12,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka City',
        state: 'Cityscape',
        propertyType: 'Island',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 13,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka City',
        state: 'Cityscape',
        propertyType: 'Amazing views',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 14,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Chattogram',
        state: 'Cityscape',
        propertyType: 'Apartment',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 15,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka City',
        state: 'Cityscape',
        propertyType: 'Apartment',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
    {
        id: 16,
        name: 'Urban Loft with City Skyline Views',
        description: 'Experience city living with a modern loft and skyline views.',
        amenities: ['City Views', 'Balcony', 'Gym', '24/7 Security'],
        pricePerNight: 150,
        location: 'Dhaka',
        state: '',
        propertyType: 'Lake',
        startDate: 'February 14, 2024',
        endDate: 'February 20, 2024',
        guests: 3,
        propertyImages: ['/images/propertyImage_2.png', '/images/propertyImage_1.png', '/images/propertyImage_1.png', '/images/propertyImage_2.png', '/images/propertyImage_2.png'],
        ratings: [4.9, 4.7, 4.5, 5, 4.8]
    },
];


export const locations = [
    'Dhaka',
    'Chattogram',
    'Rangpur',
    'Riverbank Retreat',
    'Historical District',
    'Snowy Peaks',
    'Enchanted Forest',
    'Hidden Cove',
    'Vineyard Valley',
    'Dhaka City',
]