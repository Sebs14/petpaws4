import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className='' aria-label='Sidebar'>
      <div className='bg-transparent rounded'>
        <ul className='space-y-6 '>
          <li className=''>
            <NavLink
              to={"/menuUser"}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 1024 1024'>
                <path
                  fill='white'
                  d='M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z'
                />
              </svg>

              <span className='ml-3'>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user_appointment_creation"}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'>
                <g
                  fill='none'
                  stroke='#f8f8f8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'>
                  <path d='M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5' />
                  <circle cx='17' cy='17' r='5' />
                </g>
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Agendar Cita
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/userPetRegisterView"}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 50 50'>
                <path
                  fill='#f8f8f8'
                  d='M25 21.473c2.804 0 5.158 1.9 5.823 4.469c.836 3.221.723 6.751 4.398 8.584c3.262 1.11 4.496 2.505 4.496 6.245c0 2.985-2.554 6.158-5.847 6.554c-3.682.553-6.548-.17-8.871-1.494c-2.323 1.324-5.19 2.048-8.867 1.494c-3.295-.396-5.848-3.58-5.848-6.554c0-3.66 1.317-5.209 4.573-6.27c4.007-2.047 3.469-5.635 4.363-8.717A6.01 6.01 0 0 1 25 21.473zm18.357-2.224c-.993-.863-5.046 2.506-6.321 4.172c-.775.889-1.257 2.111-1.257 3.459c0 2.711 1.94 4.909 4.327 4.909c1.816 0 3.37-1.263 4.013-3.059c1.249-3.23 1.318-7.675-.762-9.481zm-36.716 0c-2.077 1.806-2.01 6.251-.759 9.481c.643 1.796 2.196 3.059 4.011 3.059c2.389 0 4.327-2.198 4.327-4.909c0-1.348-.481-2.57-1.256-3.459c-1.276-1.666-5.328-5.035-6.323-4.172zM30.335 1.542c10.088 1.712 9.38 18.702 1.303 17.333c-2.33-.396-4.06-2.518-4.323-5.053c-.267-2.578-.868-12.938 3.02-12.28zm-10.67 0c3.889-.659 3.287 9.701 3.02 12.279c-.263 2.536-1.991 4.657-4.321 5.053c-8.079 1.371-8.786-15.62 1.301-17.332z'
                />
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Agregar Mascota
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 32 32'>
                <path
                  fill='#f8f8f8'
                  d='M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z'
                />
                <path
                  fill='#f8f8f8'
                  d='M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z'
                />
              </svg>

              <span className='flex-1 ml-3 whitespace-nowrap'>Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
