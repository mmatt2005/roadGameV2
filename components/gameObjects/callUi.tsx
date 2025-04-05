import { Call } from "@/public/dist/call"

export default function CallUi({ call }: {
    call: Call 
}) {
    return <div className="">
        <h1>Call Ui</h1>
        <p>
            {
                JSON.stringify(call, null, 2)
            }
        </p>
    </div>
}