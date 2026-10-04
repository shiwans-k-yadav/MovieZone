import { useState } from "react";
import { movies } from "./data.js";
function Movie() {

    const [movieList, setMovieList] = useState(movies);

    // creating function
    const filterByCategory=(cat)=>{
        setMovieList(movies.filter((data)=>data.category==cat))
    }

  return (
    <>

        {/* Heading */}
        <h1 className="text-amber-50 text-3xl text-center font-[Runiga]"> <span className="text-yellow-400">Movie</span><span className="text-red-500">Zone</span></h1>

        {/* Buttons */}
        <div className="flex justify-evenly items-center w-[950px] ml-70 mt-10">
            <button onClick={()=>setMovieList(movies)} className="text-sky-400 font-bold bg-black border-2 border-sky-400 px-3 py-1 rounded">All</button>
            <button onClick={()=>filterByCategory("Action")} className="text-blue-600 font-bold bg-black border-2 border-blue-600 px-3 py-1 rounded">Action</button>
            <button onClick={()=>filterByCategory("Thriller")} className="text-zinc-600 font-bold bg-black border-2 border-zinc-600 px-3 py-1 rounded">Thriller</button>
            <button onClick={()=>filterByCategory("Animation")} className="text-sky-400 font-bold bg-black border-2 border-sky-400 px-3 py-1 rounded">Animation</button>
            <button onClick={()=>filterByCategory("Horror")} className="text-green-600 font-bold bg-black border-2 border-green-600 px-3 py-1 rounded">Horror</button>
            <button onClick={()=>filterByCategory("Drama")} className="text-yellow-500 font-bold bg-black border-2 border-yellow-500 px-3 py-1 rounded">Drama</button>
            <button onClick={()=>filterByCategory("Sci-Fi")} className="text-sky-400 font-bold bg-black border-2 border-sky-400 px-3 py-1 rounded">Sci-fi</button>

        </div>

        {/* Movies Preseting */}
        <div className="grid grid-cols-[repeat(4,200px)] gap-x-20 justify-center mt-10">

            {movieList.map((val) => (
                <div key={val.id}>
                <div className="h-[400px] w-[200px]">
                    <img src={val.poster_path} className="border-4 rounded-3xl border-yellow-400 hover:scale-110 transition-transform duration-700"></img>
                    <h1 className="text-center text-amber-50 font-bold text-lg mt-5">{val.title}</h1>
                    <h1 className="text-center text-amber-50">{val.release_date}</h1>
                </div>
                </div>
            ))}
        </div>
    </>
  );
}

export default Movie;
