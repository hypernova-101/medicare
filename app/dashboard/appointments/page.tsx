'use client';

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function AppointPage() {
    const [data, setData] = useState<{date: string, name: string, spec: string, img: string}>()
    useEffect(() => {
        const app = localStorage.getItem("appoint")
        setData(JSON.parse(app!))
        console.log(data);
        
    }, [])

    return(
        <div className="p-4 flex flex-col gap-y-10">
                 
                 <h1 className="pt-12 text-4xl font-extrabold">Latest Appointments</h1>
            { data && (
                <Card key={data!.date} className="px-14 shadow-xl">
                <CardContent>
                    <CardTitle>
                        {data?.name}
                    </CardTitle>
                    <CardDescription>
                        {data?.spec}
                    </CardDescription>
                    <div className="flex flex-row w-full justify-between">
                                            <h1 className="pt-8">
                    {data.date}

                    </h1>
                    <Image
                        src={data.img}
                        width={160}
                        height={160}
                        alt=""
                        className="rounded-xl"
                    />
                    </div>

                </CardContent>
            </Card>
            )}
               
        </div>
    )
}