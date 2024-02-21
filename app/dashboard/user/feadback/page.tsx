"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegStar, FaStar } from 'react-icons/fa';

type Inputs = {
    rating: number
    feadback: string
    selectedRating: number
}
const page = () => {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>();

    // Add a state variable to track the selected rating
    const [selectedRating, setSelectedRating] = useState({ rating: 0, description: '' });

    // Array of descriptions for each rating
    const ratingDescriptions = ['Very bad', 'Bad', 'Okay', 'Good', 'Excellent'];

    // Function to handle star click and set the selected rating
    const handleStarClick = (rating: number) => {
        setSelectedRating({ rating, description: ratingDescriptions[rating - 1] });
        setValue('rating', rating);
    };

    // Function to handle submit button click and log the selected rating
    const onSubmit = (data: any) => {
        console.log(data);
    };

    // Render the star icons
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div
                    className="flex items-center gap-2 text-2xl"
                    onClick={() => handleStarClick(i)}
                >
                    {i <= selectedRating.rating && <FaStar className='text-yellow-300 text-2xl' />}
                    {i > selectedRating.rating && <FaRegStar onClick={() => handleStarClick(i)} />}
                </div>
            );
        }
        return stars;
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:mt-20 mt-10 max-w-2xl gap-4 mx-auto  bg-primary-50 lg:px-8 lg:py-12 px-3 py-8 text-secondary-50'>

                {/* //* Form Header */}
                <div className="grid gap-0.5 items-center mb-2">
                    <h1 className="text-3xl font-bold">Write a Review</h1>
                    <p className="text-sm text-gray-500">Share your experience with the community.</p>
                </div>

                {/* //* Review Textarea */}
                <div className="grid gap-2">
                    <label className="font-medium peer-disabled:opacity-70 text-base" htmlFor="review">
                        Your Review
                    </label>

                    <textarea
                        className="resize-none bg-[#2E374A] lg:text-base placeholder:text-secondary-50 placeholder:text-sm flex w-full rounded-md border-none outline-none px-3 py-2 text-sm min-h-[100px]"
                        id="review"
                        rows={4}
                        placeholder="Write your feadback here.(Optional)"
                        {...register('feadback')}
                    ></textarea>
                </div>

                {/* //* Rating Selection */}
                <div className="my-6">
                    {selectedRating.rating < 1 && <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base ">
                        Your Rating
                    </label>}

                    {/*//* Display the description for the selected rating */}
                    <div>
                        {selectedRating.description && <p className="text-base mt-6">{selectedRating.description}</p>}
                    </div>

                    <div className={'flex items-center gap-2 mt-2 mb-4'}>
                        <div className="flex items-center gap-4 text-2xl cursor-pointer" {...register('rating', { required: true })}>
                            {renderStars()}
                        </div>
                    </div>



                    {/* //! Error message for Rating validation */}
                    <div>
                        {errors?.rating && <p className="text-red-600  lg:text-base text-sm mb-2">Rating is required!</p>}
                    </div>
                </div>

                {/* //? Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 rounded-md py-3"
                >
                    Submit Review
                </button>
            </form>


            {/* //? Another design */}
            {/* <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-20 mt-10 max-w-2xl gap-4 mx-auto  bg-primary-50 lg:px-8 lg:py-12 px-3 py-8 text-secondary-50 space-y-4 cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">Write a review</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 text-2xl">
                        {renderStars()}
                    </div>
                </div>
                <div className="grid gap-4">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                        htmlFor="review"
                    >
                        Enter your review
                    </label>
                    <textarea
                        className="resize-none bg-[#2E374A] lg:text-base placeholder:text-secondary-50 placeholder:text-sm flex w-full rounded-md border-none outline-none px-3 py-2 text-sm min-h-[150px]"
                        id="review"
                        placeholder="Enter your review"
                        {...register('feadback')}
                    ></textarea>
                </div>
                <button
                    className="bg-blue-500 rounded-md h-10 px-4 py-2"
                    type="submit"
                >
                    Submit Review
                </button>
            </form> */}
        </div>
    );
};

export default page;