export default function AppointmentsTable({
  PetOwner,
  PetId,
  PetName,
  UserEmail,
  Date,
}) {
  return (
    <article className="bg-white shadow-md border border-gray-200 max-w-7xl  dark:bg-emerald-800 dark:border-emerald-700 sm:w-full md:w-full ">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group ">
          <tr className="border border-emerald-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-emerald-800 p-2  text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Pet Owner Name
            </th>
            <th className="bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Pet id
            </th>
            <th className="bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className="bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email Address
            </th>
            <th className="bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Appointment Date
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
            <td className="p-2 md:border md:border-grey-500 text-left text-black block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Name
              </span>
              {PetOwner}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left text-black block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Pet id
              </span>
              {PetId}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left text-black block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Name
              </span>
              {PetName}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left text-black block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Email Address
              </span>
              {UserEmail}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left text-black block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Appointment Date
              </span>
              {Date}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
