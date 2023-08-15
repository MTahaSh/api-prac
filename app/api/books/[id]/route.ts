import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";


export async function GET(request: NextRequest, {params}:{params:{id:string}})
{   
    const bookId = Number(params.id);
    const book = books.find((item:any)=>  item.id === bookId)
    console.log(params);
    
    return NextResponse.json({
        book
    });
}


export async function PUT(request: NextRequest, {params}:{params:{id:string}})
{   
    const req = await request.json();
    const bookId = Number(params.id);
    const book = books.findIndex((item:any)=>  item.id === bookId)
    console.log(params);
    
    if(book)
    {   
        books[book] = req;
        return NextResponse.json({ message: ` book updated against this id ${bookId}`,books });
    }
    else {
    return NextResponse.json({ message: `No book found against this id ${bookId}` });
    }

}