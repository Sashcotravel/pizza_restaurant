import {NextResponse} from "next/server";
import {prisma} from "@/utils/connect";

export const PUT = async (req: NextResponse, { params }: { params: {id: string} }) => {
    const { id } = params

    try {
        const body = await req.json()

        await prisma.order.update({
            where: {
                id: id
            },
            data: {
                status: body
            }
        })

        return new NextResponse(
            JSON.stringify({message: "Order has been updated"}), { status: 200 }
        )

    } catch (err) {
        console.log(err)

        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}), { status: 500 }
        )
    }
}