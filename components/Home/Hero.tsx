import HeroSearchForm from "./HeroSearchForm";

const Hero = () => {
    return (
        <section
            className=" bg-white bg-cover bg-no-repeat pt-10 lg:pt-[8.125rem] lg:h-[35.56rem] pb-20 lg:pb-0"
            style={{ backgroundImage: `url(/images/hero-bg.png)` }}
        >
            <h1
                className=" text-4xl select-none lg:text-[3.5rem] font-extrabold text-white text-center mt-0 lg:mt-5 mb-5"
            >
                Book Your Room Any Place from Any Where
            </h1>
            <p className=" text-white-50 select-none text-xl text-center"
            >
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form,
            </p>

            {/* Wrapper */}
            <div className="wrapper">
                <div
                    className="bg-secondary py-4 px-4 md:py-[5.625rem] md:px-40 rounded-[10px] mt-[5.25rem] relative m-shadow "
                >
                    <HeroSearchForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;