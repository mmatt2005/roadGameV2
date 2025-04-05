import { Point } from "@/public/dist/point"

export default function PointUi({ point } : { 
    point: Point
}) { 
    return <div className="">
        <h1>Point Ui</h1>
        {
            JSON.stringify(point, null, 2)
        }
    </div>
}