export default function Card({ src, title, description, color }) {
  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className={`flex flex-col text-gray-800 rounded-lg justify-center items-center ${color} sm:w-1/2 md:w-1/3 lg:w-1/4`}
    >
      <div className="flex w-full justify-center items-center h-1/2">
        <img src={src} alt={title} className="w-full" />
      </div>
      <h1 className="text-3xl my-4 font-medium text-center">{title}</h1>
      <p className="text-2x p-4 text-justify font-thin ">{description}</p>
    </article>
  );
}
