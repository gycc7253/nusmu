import Head from 'next/head'
import Link from 'next/link'
import MyLayout from '../components/layout'
import Room from './room/room'

export default function Home() {
  return (
    <div>Home</div>
    )
}

Home.getLayout = (home) => (
  <Room>
    {home}
  </Room>
)