import { Tag } from "antd";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PostTable from "../../components/PostTable";
import { fetchAllPosts } from "../../services/posts.service";
const Index = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await fetchAllPosts();
                setPosts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);
    return (
        <div>
            <Tag color="yellow"><Link to='/posts/create' style={{ color: "red" }}>Create</Link></Tag>
            <PostTable data={posts} />
        </div>
    )
}
export default Index