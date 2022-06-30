export default function AppointmentsTable({
  PetOwner,
  PetId,
  PetName,
  symptoms,
  Date,
}) {
  return (
    <tbody className='block md:table-row-group'>
      <tr className='bg-white border border-grey-500 md:border-none block md:table-row'>
        <td className='p-2 md:border md:border-grey-500 text-left text-black block md:table-cell'>
          <span className='inline-block w-1/3 md:hidden font-bold'>Name</span>
          {PetOwner}
        </td>
        <td className='p-2 md:border md:border-grey-500 text-left text-black block md:table-cell'>
          <span className='inline-block w-1/3 md:hidden font-bold'>Pet id</span>
          {PetId}
        </td>
        <td className='p-2 md:border md:border-grey-500 text-left text-black block md:table-cell'>
          <span className='inline-block w-1/3 md:hidden font-bold'>Name</span>
          {PetName}
        </td>
        <td className='p-2 md:border md:border-grey-500 text-left text-black block md:table-cell'>
          <span className='inline-block w-1/3 md:hidden font-bold'>
            symptoms
          </span>
          {symptoms}
        </td>
        <td className='p-2 md:border md:border-grey-500 text-left text-black block md:table-cell'>
          <span className='inline-block w-1/3 md:hidden font-bold'>
            Appointment Date
          </span>
          {Date}
        </td>
      </tr>
    </tbody>
  );
}
