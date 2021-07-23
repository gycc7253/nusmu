import Link from 'next/link'
import MyLayout from '../components/layout'
export default function Friends() {
    return (
        <>
        <h1 className="title">
        Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
  }

  Friends.getLayout = (friends) => (
    <MyLayout number='4'>
      {friends}
    </MyLayout>
  )