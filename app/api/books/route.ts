import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";


export async function GET(request: NextRequest)
{
    return NextResponse.json({
        books
    });
}


export async function POST(request: NextRequest)
{
    const req = await request.json();
    books.push(req);
    console.log("Data entered: " , req);
    
    return NextResponse.json({
        books,
        message:"Book added!"
    });
}

// export async function GET(request: NextRequest)
// {
//     return NextResponse.json({
//         books
//     });
// }