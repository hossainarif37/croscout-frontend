import { Property, propertyList } from "@/constant";

// Search Interface
export interface SearchOptions {
    location?: string;
    startDate?: string;
    endDate?: string;
    guests?: number;
}

export const searchProperties = (options: SearchOptions): Property[] => {
    const { location, startDate, endDate, guests } = options;


    // If no search criteria provided, return all properties
    if (!location && !startDate && !endDate && guests === undefined) {
        return propertyList;
    }

    // Start with all properties
    let filteredProperties = [...propertyList];

    // Apply filters based on provided criteria
    if (location) {
        filteredProperties = filteredProperties.filter(property => property.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (startDate) {
        const startFilteredProperties = filteredProperties.filter(property => property.startDate === startDate);
        if (startFilteredProperties.length > 0) {
            filteredProperties = startFilteredProperties;
        }
    }

    if (endDate) {
        const endFilteredProperties = filteredProperties.filter(property => property.endDate === endDate);
        if (endFilteredProperties.length > 0) {
            filteredProperties = endFilteredProperties;
        }
    }

    if (guests !== undefined) {
        const guestsFilteredProperties = filteredProperties.filter(property => property.guests >= guests);
        if (guestsFilteredProperties.length > 0) {
            filteredProperties = guestsFilteredProperties;
        }
    }

    return filteredProperties;
};
