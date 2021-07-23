import Head from 'next/head'
import Link from 'next/link'
import MyLayout from '../components/layout'


export default function Home() {
  return (
    <div>Home</div>
    )
}

Home.getLayout = (home) => (
  <MyLayout>
    {home}
  </MyLayout>
)