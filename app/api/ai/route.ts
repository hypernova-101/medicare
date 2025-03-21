import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const ques = req.headers.get("question")
    const genAI = new GoogleGenerativeAI("AIzaSyAE3aOBJsms7VhEXEx91ggFAqutC_GV_M8");
    
    const gemModel = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
    });
    
    const res = await gemModel.generateContent(ques!)
    console.log(res.response);
    
    return NextResponse.json({
        "ans": res.response.text()
    })
}