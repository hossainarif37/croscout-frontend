"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./addProperty.module.css"


type Inputs = {
    name: string
    description: string
    amenities: string
    price: number
    location: string
    state: string
    propertyType: string
    image: string
    owner: string
    ratings: number
    guests: number
}
const AddPropertyForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // Convert the amenities string into an array
        const amenitiesArray = data.amenities.split(',').map(amenity => amenity.trim());

        // Construct the final object with the amenities array
        const finalData = {
            ...data,
            amenities: amenitiesArray
        };

        console.log(finalData);
    };

    return (
        <div>
            <main className="overflow-auto">
                <div className="mx-auto max-w-[900px] space-y-8 lg:p-4 text-secondary-50">
                    <div className="rounded-lg bg-primary-50 text-card-foreground shadow-lg" data-v0-t="card">
                        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formInput} px-2 py-4 lg:p-12 space-y-4`}>
                            <div className={` grid gap-4`}>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="property-name"
                                    >
                                        Property name
                                    </label>
                                    <input
                                        type="text"
                                        id="property-name"
                                        placeholder="Property name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors?.name && <p className="text-red-600 mt-1 lg:text-base text-sm">Property name is requeard!</p>}
                                </div>



                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Description"
                                        {...register("description", { required: true })}
                                    ></textarea>
                                    {errors?.description && <p className="text-red-600 mt-1 lg:text-base text-sm">Description name is requeard!</p>}
                                </div>
                            </div>
                            {/* <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div> */}
                            <div className="grid gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="amenities"
                                    >
                                        Amenities
                                    </label>
                                    <input
                                        id="amenities"
                                        placeholder="Amenities"
                                        {...register("amenities", { required: true })}
                                    />
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Enter amenities separated by commas (e.g. Wifi, Pool, Kitchen)
                                    </div>
                                    {errors?.amenities && <p className="text-red-600 mt-1 lg:text-base text-sm">Amenities is requeard!</p>}
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="price"
                                        >
                                            Price per night
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            placeholder="Price"
                                            min="1"
                                            {...register("price", { required: true })}
                                        />
                                        {errors?.price && <p className="text-red-600 mt-1 lg:text-base text-sm">Price is requeard!</p>}
                                    </div>


                                    <div className={`flex flex-col gap-1.5 `}>
                                        <label
                                            htmlFor="property-type"
                                        >
                                            Property type
                                        </label>
                                        <select id="input-field" className="form-select"
                                            {...register("propertyType", { required: true })}
                                        >
                                            <option value="" selected disabled>Select an option</option>
                                            <option value="Option  1">Option  5</option>
                                            <option value="Option  2">Option  2</option>
                                            <option value="Option  3">Option  3</option>
                                        </select>
                                        {errors?.propertyType && <p className="text-red-600 mt-1 lg:text-base text-sm">Property type name is requeard!</p>}
                                    </div>
                                </div>
                                <div className={`grid md:grid-cols-2 gap-4 ${styles.state}`}>

                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="location"
                                        >
                                            Location
                                        </label>
                                        <select id="input-field" className="form-select"
                                            {...register("location", { required: true })}
                                        >
                                            <option value="" selected disabled>Select an option</option>
                                            <option value="Option  1">Option  5</option>
                                            <option value="Option  2">Option  2</option>
                                            <option value="Option  3">Option  3</option>
                                        </select>
                                        {errors?.location && <p className="text-red-600 mt-1 lg:text-base text-sm">Location is requeard!</p>}
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="state"
                                        >
                                            State
                                        </label>
                                        <select
                                            id="state"
                                            className="form-select"
                                            {...register("state", { required: true })}
                                        >
                                            <option value="" selected disabled>Select an option</option>
                                            <option value="Option   1">Option 1</option>
                                            <option value="Option   2">Option 2</option>
                                            <option value="Option   3">Option 3</option>
                                        </select>
                                        {errors?.state && <p className="text-red-600 mt-1 lg:text-base text-sm">State name is requeard!</p>}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="guests"
                                        >
                                            Number of guests
                                        </label>
                                        <input
                                            type="number"
                                            className=""
                                            id="guests"
                                            placeholder="Enter number"
                                            {...register("guests", { required: true })}
                                        />
                                        {errors?.guests && <p className="text-red-600 mt-1 lg:text-base text-sm">Guest is requeard!</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="guests"
                                        >
                                            Owner ID
                                        </label>
                                        <input
                                            type="text"
                                            className=""
                                            id="guests"
                                            placeholder="Enter ID"
                                            {...register("owner", { required: true })}
                                        />
                                        {errors?.owner && <p className="text-red-600 mt-1 lg:text-base text-sm">Provide owner ID!</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="images"
                                    >
                                        Property images
                                    </label>
                                    <input
                                        className="p-0"
                                        type="file"
                                        id="images"
                                        placeholder="Images"
                                        {...register("image", { required: true })}
                                    />
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Upload your images here</div>
                                    {errors?.image && <p className="text-red-600 mt-1 lg:text-base text-sm">Property images is requeart!</p>}
                                </div>
                            </div>
                            <div className="flex justify-end py-2">
                                <button type="submit" className=" bg-blue-500 rounded-md h-10 px-4 py-2 cursor-pointer"  >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddPropertyForm;
