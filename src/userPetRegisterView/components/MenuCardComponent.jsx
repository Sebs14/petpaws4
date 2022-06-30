export default function MenuCardContainer({ children }) {
  return (
    <div className="flex flex-col flex-wrap gap-7 p- sm:flex-row w-full sm:p-10  justify-center items-center">
      {children}
    </div>
  );
}
