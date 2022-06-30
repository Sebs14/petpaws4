export default function PetView({id, petName, petAge, petRaze, petSpecies, src }){
    return(
        <article className="m-4 bg-white shadow-md border border-gray-200 rounded-t-2xl rounded-b-xl max-w-2xl  dark:bg-gray-800 dark:border-gray-700 sm:w-full md:w-full ">
            <div className=" flex flex-content justify-center">
                <img className="aspect-video rounded-t-3xl object-cover object-center sm:w-3/4 md:w-full p-4" src={src} />
            </div>

            <div className="flex flex-content justify-center">
                <h1 className="text-3xl align-center my-4 font-semibold bg-emerald-600 rounded-2xl text-center pr-16 pl-16 text-black dark:text-white">
                    id: {id}
                </h1> 
            </div>
                
            <div className="p-4 align-center">
                <h1 className="text-3xl font-medium text-black dark:text-white ">Name: {petName}</h1>
                <p className="text-lg tracking-tight font-light text-slate-900 dark:text-slate-300 leading-6">Age: {petAge}</p>
                <p className="text-lg tracking-tight font-light text-slate-900 dark:text-slate-300 leading-6">Raze: {petRaze}</p>
                <p className="text-lg tracking-tight font-light text-slate-900 dark:text-slate-300 leading-6">Species: {petSpecies}</p>
            </div>
            

        </article> 
    );
}