import { useRecoilValue } from 'recoil'
import { darkModeAtom } from '../states/themeStates'
import Nav from './Nav'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const darkMode = useRecoilValue(darkModeAtom)

  console.log('darkMode: ', darkMode)
  return (
    <div className={`max-w-6xl mx-auto my-2 ${darkMode ? 'dark' : ''}`}>
      <Nav />
      {children}
      <style jsx global>{`
        body {
          background-color: ${darkMode ? '#12232e' : '#eefbfb'};
        }
      `}</style>
    </div>
  )
}

export default Layout
