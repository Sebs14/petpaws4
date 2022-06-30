export default function AboutUs({title, description, subtitle}) {
    return(
        <article className="flex bg-grey-100 p-10 text-black dark:text-black">
            <div className="mb-auto mt-auto max-w-lg text-black dark:text-black">
                <h1 className="text-3xl uppercase font-bold text-black dark:text-black">{title}</h1>
                <p className="font-semibold mb-5 text-black dark:text-black">{subtitle}</p>
                <p className="text-black dark:text-black">{description}</p>
            </div>
        </article>
    );
}