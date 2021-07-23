import Link from 'next/link'
export default function FirstRoom() {
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