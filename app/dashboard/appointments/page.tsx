'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";


export default function AppointPage() {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        const d = []
        const keys = Object.keys(localStorage)
        const vals = Object.values(localStorage)
        for(let i = 0; i < keys.length; i++) {
            d.push({
                name: vals[i].name,
                prof: vals[i].specialty,
                date: keys[i],
                img: vals[i].image
            })
        }

        setData(d)
    }, [])

    return(
        <div>
            { data.map((db, id, key) => {
                return(
                    
            <Card key={db.prof}>
            <CardContent>
                <CardTitle>
                    {db.name}
                </CardTitle>
            </CardContent>
        </Card>
                )
            })}
        </div>
    )
}