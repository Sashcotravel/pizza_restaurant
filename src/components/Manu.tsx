"use client"

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
    { id: 1, title: 'Homepage', url: '/'},
    { id: 2, title: 'Menu', url: '/'},
    { id: 3, title: 'Working', url: '/'},
    { id: 4, title: 'Contact', url: '/'},
]

const Manu = () => {

    const [open, setOpen] = useState(false)

    const user = false

    return (
        <div>
            {!open ?
                <Image src='/open.png' alt='menu' width={20} height={20} onClick={() => setOpen(true)}/>
                :<Image src='/close.png' alt='menu' width={20} height={20} onClick={() => setOpen(false)}/>}
                {/*:<Image src='/close.png' alt='menu' width={20} height={20} onClick={() => setOpen(false)}/>}*/}
            {open && <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center
                            w-full justify-center text-3xl flex-col gap-8 z-10'>
                {
                    links.map(item => {
                        return <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    })
                }
                {!user ? <Link href='/login' onClick={() => setOpen(false)}>Login</Link>
                    : <Link href='/orders' onClick={() => setOpen(false)}>Orders</Link>}
                <Link href='/cart' onClick={() => setOpen(false)}>
                    <CartIcon/>
                </Link>
            </div>}
        </div>
    );
};

export default Manu;