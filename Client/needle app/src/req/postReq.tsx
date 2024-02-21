import { useEffect, useState } from "react"
interface Post{
    name: string;
    email:string;
    phoneNumber: string;
}
function postReq(url:string){
    const [posts, setPosts] = useState<Post[]>([]);
    console.log("aq")
    useEffect(()=>{
        const fetchPosts = async() =>{
            const response = await fetch(`${url}`);
            const posts = (await response.json()) as Post[];
            setPosts(posts);
        }
        fetchPosts();
    }, []);
}

export default postReq;