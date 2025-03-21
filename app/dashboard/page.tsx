'use client';

import React, { useState, useRef, useEffect } from 'react';

import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { Button } from '@/components/ui/button';
import { generateText } from "ai"
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Ambulance, Heading1, Loader, Plus } from 'lucide-react';
import { toast } from 'sonner';


interface Chat {
    ques: string;
    res: string;
}

export default function DashboardPage() {

    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState<any>({})


    const sendMessage = async () => {
        setLoading(true)
        const res = await fetch("http://localhost:3000/api/ai", {
            headers: {
                "question": text
            }
        })
        setText("")
        setLoading(false)
        const data = await res.json()

        setRes({
            query: text,
            ans: data.ans
        })
        
    }

    const callup = async () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            toast(`Sending an ambulance at your address Latitude: ${pos.coords.latitude} Longitude: ${pos.coords.longitude}`, {
                description: ``
            })
        })
    }

    return (
        <div className='flex flex-1'>

            <Button variant="outline" size="lg" className='absolute top-5 right-5 border-2 scale-150' onClick={callup}> 
                <Ambulance/>
            </Button>

            {
                !loading && (
                        <div className='flex flex-col gap-y-5 p-10'>
                            <h1 className='p-10'>{res.query}</h1>
                            { res.ans && <h1 className='bg-zinc-200 p-10 rounded-xl'>{res.ans}</h1> }
                        </div>
                )
            }

            <div className='absolute bottom-0 md:bottom-5 left-10 md:left-1/2 flex flex-row w-80 gap-x-4 '>
                <Input className='min-w-full' placeholder='Type in your health issues' onChange={(e) => setText(e.target.value)} value={text}>
                </Input>
            <Button onClick={sendMessage} disabled={loading}>
                { loading ? <Loader className='animate-spin'/> : <h1>Send</h1>}
            </Button>
            </div>
        </div>
    )
}


function ChatInterface() {
    return (
        <>
            <div className='min-h-screen w-full flex flex-1 '>

            </div>
        </>
    )
}

