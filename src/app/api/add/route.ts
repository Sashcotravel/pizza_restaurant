import {NextResponse} from "next/server";
import {prisma} from "@/utils/connect";



export const POST = async (req: NextResponse) => {

    try {
        const body = await req.json()

        const product = await prisma.product.create({
            data: body
        })


        return new NextResponse(
            JSON.stringify(product), { status: 201 }
        )

    } catch (err) {
        console.log(err)

        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}), { status: 500 }
        )
    }
}