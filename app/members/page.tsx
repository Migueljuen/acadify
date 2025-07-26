import React from 'react'
import Link from 'next/link'
export default async function page() {

    return (
        <div>
            members:
            <ul>
                <li ><Link href="/members/1">User 1</Link></li>
                <li ><Link href="/members/2">User 2</Link></li>
                <li ><Link href="/members/3">User 3</Link></li>
                <li ><Link href="/members/4">User 4</Link></li>


            </ul>
        </div>
    )
}
