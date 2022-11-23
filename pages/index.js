import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react';
import { NavBarContext } from '@/util/context/navbarpos';
export default function Home() {
  const {setNavbarPos} = useContext(NavBarContext);
    useEffect(() => {
        setNavbarPos(true)
    }, []);
  return (
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  )
}
