"use client"
import Select from 'react-select'

import { useCountries } from "@/hooks/useCountries";
import { useSearchContext } from '@/providers/SearchProvider';

export type CountrySelectValue = {
    flag: string,
    label: string,
    latlng: number[],
    region: string,
    value: string
} | undefined;

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue | undefined) => void;
}


const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    const { getAll } = useCountries();
    const { setLocation, setLocationObject } = useSearchContext();
    const handleMenuClose = () => {
        // Triggered when the menu is closed, including when the user clears the filter
        if (!value) {
            // User cleared the filter, you can perform additional actions here
            // For example, clear another state in your context
            setLocationObject(undefined);
            setLocation('')
        }
    };
    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                // onMenuClose={handleMenuClose}

                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className='flex flex-row items-center gap-3'>
                        <div>{option.flag}</div>
                        <div>
                            {option.label},
                            <span className='text-neutral-500 ml-1'>
                                {option.region}
                            </span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => 'p-3 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg',
                }}

                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: '#666',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
};

export default CountrySelect;