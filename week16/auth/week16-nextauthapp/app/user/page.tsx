import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";

export default async function (){

    const session =await getServerSession();
    return <div>
        <Appbar />
        User components
        {JSON.stringify(session)}
    </div>
}