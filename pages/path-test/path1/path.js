import Link from 'next/link'

export default function path() {
    return (
        <>
        <Link href="./../">To index?</Link>
        <br/>
        <Link href="/path-test/test">path-test?</Link>
        </>
    )
}