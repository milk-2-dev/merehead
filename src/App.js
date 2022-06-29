import { useSelector } from 'react-redux'
import './App.css'
import Backdrop from './components/backdrop/Backdrop'
import Loader from './components/loader/Laoder'
import Notifications from './components/notifications/Notifications'
import { Header, Hero, UsersList, CreateUser } from './features'
import EditUser from './features/users/EditUser'

function App() {
  const { loading } = useSelector((state) => state.users)

  return (
    <div className='text-base bg-body flex flex-col min-h-screen overflow-hidden'>
      <Header />
      <main>
        <Hero />
        <UsersList />
        <CreateUser />
        <EditUser />

        {loading !== 'idle' ? (
          <div>
            <Loader />
            <Backdrop />
          </div>
        ) : null}

        <Notifications />
      </main>
    </div>
  )
}

export default App
