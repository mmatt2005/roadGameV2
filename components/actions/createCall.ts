"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

export interface AI_Call {
    call_title: string
    call_description: string
    call_emoji: string
    requiredResponders: {
        police: number
        fire: number
        ems: number
    }
}

// Filler commit 4/6/25
export default async function createCall(requiredResponders: AI_Call["requiredResponders"], previousCallTitle: AI_Call["call_title"] | null) {
    const genAI = new GoogleGenerativeAI(process.env.AI_KEY || "")


    console.log(requiredResponders)

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        generationConfig: {
            responseMimeType: "application/json",
        }
    })


    const prompt = `
    Create a single realistic 911 call using this JSON schemaa. Return ONLY the object, NOT an array.
    
    - PRIORITIZE calls that use the **highest available responder type**.
    - The number of responders required should be appropriate for the call type.
    - Do not generate emergencies that require more responders than are available.
    - call_description should be no longer than 175 characters.
    - The call should be realistic for the current in-game **season** and **time of day**.
    - The call_emoji MUST be a **single, relevant emoji** that represents the emergency type. It should NEVER be text or a placeholder word.

    Available responders:
    - Police: ${requiredResponders.police}
    - Fire: ${requiredResponders.fire}
    - Ems: ${requiredResponders.ems}

    ${previousCallTitle && `
        Previous Call (DO NOT generate something similar to this):
        ${previousCallTitle}
    `}
    
    Call = {
        "call_title": string,
        "call_description": string,
        "call_emoji": string
        "requiredResponders": {
            "police": number,
            "fire": number,
            "ems": number
        }
    }
    `


    const req = await model.generateContent(prompt)

    const res = JSON.parse(req.response.text()) as AI_Call

    console.log(res)

    return res
}