import React from 'react'

export default async function page() {

    const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!getUsers.ok) throw new Error("Failed to fetch data");

    const users = await getUsers.json();

    return (
        <div className='grid grid-cols-4 justify-items-center gap-y-4  ' >
            {users.map((user: { id: number, name: string, email: string, username: string }) => (
                <div
                    key={user.id}
                    className='border border-red-300  w-64 h-32 shadow-md rounded-xl p-4'
                >
                    <p>Email: {user.email}</p>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                </div>
            )

            )}
        </div>
    )
}
