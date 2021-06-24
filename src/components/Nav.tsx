import { useRecoilState } from 'recoil'
import { darkModeAtom } from '../states/themeStates'
import SvgIcon from './SvgIcon'

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
  return (
    <div className="flex justify-between">
      <h2>Home</h2>
      <div className="flex justify-between space-x-5">
        <h2 className="px-3 py-1.5 dark:text-white text-black font-semibold">
          Courses
        </h2>
        <h2 className="px-3 py-1.5 dark:text-white text-black font-semibold">
          Blogs
        </h2>
        <h2 className="px-3 py-1.5 dark:text-white text-black font-semibold">
          Contact
        </h2>

        <h2
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1.5 dark:text-white text-black font-semibold"
        >
          {darkMode ? (
            <SvgIcon d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          ) : (
            <SvgIcon d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          )}
        </h2>
      </div>
    </div>
  )
}

export default Nav
