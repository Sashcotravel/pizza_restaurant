"use client"

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from "react";

function AddPage() {

    const { data: session, status } = useSession()
    const [input, setInput] = useState({
        title: "", desc: "", price: 0, catSlug: 0
    })

    const [option, serOption] = useState({
        title: '', additionalOption: 0
    })

    const router = useRouter()

    if(status === 'loading'){
        return <p>Loading...</p>
    }

    if(status === 'unauthenticated' || !session?.user?.isAdmin){
        router.push('/')
    }


    return (
        <div>
            <form className='shadow-lg flex flex-wrap gap-4 p-8'>
                <h1>Add New Product</h1>
                <div className='w-full flex flex-col gap-2'>
                    <label>Title</label>
                    <input className='ring-1 ring-red-200 p-2 rounded-sm' type="text" name="title" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label>Description</label>
                    <textarea className='ring-1 ring-red-200 p-2 rounded-sm' name="desc" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label>Price</label>
                    <input className='ring-1 ring-red-200 p-2 rounded-sm' type="number" name="price" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label>Category</label>
                    <input className='ring-1 ring-red-200 p-2 rounded-sm' type="text" name="category" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label>Option</label>
                    <div>
                        <input className='ring-1 ring-red-200 p-2 rounded-sm'
                               type="text" placeholder='Title' name="titleOpti"/>
                        <input className='ring-1 ring-red-200 p-2 rounded-sm'
                               type="number" placeholder='Additional Price' name="additionalPrice"/>
                    </div>
                    <button className='w-52 bg-red-500 text-white p-2'>Add Option</button>
                </div>
                <div>
                    <div className='ring-1 bg-red-500 rounded-md cursor-pointer'>
                        <span>Small</span>
                        <span>$2</span>
                    </div>
                </div>
                <button className='w-full bg-red-500 text-white p-2'>Submit</button>
            </form>
        </div>
    );
}

export default AddPage;