/* This example requires Tailwind CSS v2.0+ */
export default function List({ src, title, name }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="bg-emerald-600 px-4 py-5 flex justify-center items-center">
        <h3 className="text-lg leading-6 font-medium text-white sm:text-xl lg:text-3xl">Registro de mascotas</h3>
      </div>
      <div className="border-t border-gray-200 flex flex-row font-bold sm:text-xl lg:text-3xl">
        <div>
          <img src={src} alt={title} className="w-20 sm:w-36 lg:w-40" />
        </div>
        <div className="flex flex-col p-5 justify-center">
          <p>{name}</p>
        </div>
      </div>
    </div>
  )
}
