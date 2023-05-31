import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blogging-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    console.log(posts);

    return (
        <div className='bg-blue-400 pt-16 pb-10 md:pt-36 md:pb-16 '>
            <div className='max-w-7xl mx-auto px-2 h-screen'>
                {
                    posts.map(postItem => <PostCard key={postItem._id} postItem={postItem}></PostCard>)
                }
            </div>
             <div className='h-screen'> 
                <h2> Demo</h2>
             </div>
        </div>
    );
};

export default Home;