import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>First of all</title>
        </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image
            src="/images/profile.jpg"
            height = {144}
            width={144}
            alt="Profile Picture"
            />
        </>
    );
}