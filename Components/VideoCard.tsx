
export function VideoCard(props: any){
    return <div>
        <img src={props.image} alt="" className="rounded-xl" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w-20 h-20"} src={props.image} alt="" />
            </div>

            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 pl-5 text-gray-400 text-base">
                    {props.author}
                </div>

                <div className="col-span-11 pl-5 text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
                
            </div>

            
        </div>
    </div>
}