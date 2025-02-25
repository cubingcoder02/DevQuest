export default function Hero(){
    return(
        <section className="container my-16">
            <h1 className="text-4xl font-bold text-center">
                Find your next<br/>dream job
            </h1>
            {/* <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus fuga quos accusamus itaque dolore ex blanditiis neque odio. Inventore, velit nisi laboriosam est mollitia alias natus, delectus magni hic consectetur dolorum architecto.

            </p> */}
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search" 
                    className="border border-gray-400 w-full py-2 px-3 rounded-md" 
                    placeholder="Search Phrase.."/>            
                <button className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 py-2 px-4 rounded-md">
                    Search
                </button>
            </form>
        </section>
    )
}