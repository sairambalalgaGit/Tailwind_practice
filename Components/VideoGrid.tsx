import React from "react";
import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
},
{
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
},
{
    title: "How to learn playing in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
},
{
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
},
{
    title: "How to learn playing in 30 days | 30 day plan | Code with me",
    image: "tail.jpg",
    author: "Ajay",
    views: "2M",
    timestamp: "2 days ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
       {VIDEOS.map(video => <div>
        <VideoCard 
            title={video.title} 
            image={video.image}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp} 
        />
       </div> )}
    </div>
}