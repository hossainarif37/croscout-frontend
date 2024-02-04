"use client"

import { Property } from "@/constant";
import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

// DateRange Interface
export interface DateRange {
    startDate: Date;
    endDate: Date;
    key: string;
}


type FilteredProperty = Property[] | [];

// SearchContextProps Interface
export interface SearchContextProps {
    searchCalDate: DateRange[];
    setSearchCalDate: Dispatch<SetStateAction<DateRange[]>>;
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
    adultsCount: number;
    setAdultsCount: Dispatch<SetStateAction<number>>;
    childrenCount: number;
    setChildrenCount: Dispatch<SetStateAction<number>>;
    isSearchBtnClicked: boolean;
    setIsSearchBtnClicked: Dispatch<SetStateAction<boolean>>;
    filteredProperty: FilteredProperty;
    setFilteredProperty: Dispatch<SetStateAction<FilteredProperty>>;
    searchDisable: boolean;
    setSearchDisable: Dispatch<SetStateAction<boolean>>,


}

const SearchContext = createContext<SearchContextProps | null>(null);

interface SearchProviderProps {
    children: ReactNode;
}

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {

    //*--------- States Start -------------//
    const [searchCalDate, setSearchCalDate] = useState<DateRange[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [location, setLocation] = useState<string>("");
    const [adultsCount, setAdultsCount] = useState<number>(1);
    const [childrenCount, setChildrenCount] = useState<number>(0);
    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState<boolean>(false);
    const [searchDisable, setSearchDisable] = useState<boolean>(true);
    const [filteredProperty, setFilteredProperty] = useState<FilteredProperty>([]);
    //*--------- States End -------------//

    const contextValue: SearchContextProps = {
        searchCalDate,
        setSearchCalDate,
        location: location,
        setLocation: setLocation,
        adultsCount,
        setAdultsCount,
        childrenCount,
        setChildrenCount,
        filteredProperty,
        setFilteredProperty,
        isSearchBtnClicked,
        setIsSearchBtnClicked,
        searchDisable,
        setSearchDisable
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hook to consume the context
const useSearchContext = () => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error("useSearchContext must be used within a SearchProvider");
    }

    return context;
};

export { SearchProvider, useSearchContext };
