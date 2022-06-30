export default function appointmentContainer({ children }) {
  return (
    <div className="flex flex-col flex-wrap gap-6 p-6 sm:flex-row w-full sm:p-10  justify-center items-center">
      {children}
    </div>
  );
}