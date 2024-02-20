"use client"
import { useForm } from 'react-hook-form';

type Inputs = {
    rating: number
    feadback: string
    selectedRating: number
}
const page = () => {



    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>();
    const selectedRating = watch('rating');

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:mt-20 mt-10 max-w-2xl gap-4 mx-auto  bg-primary-50 lg:px-8 lg:py-12 px-3 py-8 text-secondary-50'>
                <div className="grid gap-0.5 items-center mb-2">
                    <h1 className="text-3xl font-bold">Write a Review</h1>
                    <p className="text-sm text-gray-500">Share your experience with the community.</p>
                </div>
                <div className="grid gap-2">
                    <label className="font-medium peer-disabled:opacity-70 text-base" htmlFor="review">
                        Your Review
                    </label>
                    <textarea
                        {...register('feadback')}
                        className="resize-none bg-[#2E374A] lg:text-base placeholder:text-secondary-50 placeholder:text-sm flex w-full rounded-md border-none outline-none px-3 py-2 text-sm min-h-[100px]"
                        id="review"
                        rows={4}
                        placeholder="Write your review here."
                    ></textarea>
                </div>
                <div className="grid gap-2">
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base mt-4">
                        Your Rating
                    </label>
                    <div className={'flex items-center gap-2 mt-2 mb-4'}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <p
                                key={rating}
                                className={`h-9 w-9 flex items-center justify-center cursor-pointer hover:bg-blue-500 duration-100 rounded-full border ${selectedRating === rating ? 'bg-blue-500' : ''}`}
                                onClick={() => setValue('rating', rating)}
                                {...register('rating', { required: true })}
                            >
                                {rating}
                            </p>
                        ))}
                    </div>
                    <div>
                        {errors?.rating && <p className="text-red-600  lg:text-base text-sm mb-2">Rating is required!</p>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 rounded-md py-3"
                >
                    Submit Review
                </button>
            </form>


//? Another design
            {/* <div className="lg:mt-20 mt-10 max-w-2xl gap-4 mx-auto  bg-primary-50 lg:px-8 lg:py-12 px-3 py-8 text-secondary-50 space-y-4">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">Write a review</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 fill-muted"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 fill-muted"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 fill-muted"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 fill-muted"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 fill-muted cursor-pointer"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                    ></textarea>
                </div>
                <button className="bg-blue-500 rounded-md h-10 px-4 py-2">
                    Submit Review
                </button>
            </div> */}

        </div>
    );
};

export default page;