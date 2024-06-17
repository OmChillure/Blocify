import img from "next/img";

export function Gallery() {
    return(
<div className="grid h-full w-full grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/logo.png" alt=""  height={200}/>
        </div>
    </div>
</div>
    )
}