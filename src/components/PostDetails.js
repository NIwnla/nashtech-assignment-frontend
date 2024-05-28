import { Descriptions } from "antd";
import { useEffect, useState } from "react";
import { fetchPostById } from "../services/posts.service";

export default function PostDetails(props){
    const [post, setPost] = useState()
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const post = await fetchPostById(props?.id);
                setPost(post);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPost();
    });

    return (
        <Descriptions
            title='Post info'
            layout="vertical"
            bordered>
            <Descriptions.Item
                key="1"
                label="id"
                span={1}
                children={post?.id} />
            <Descriptions.Item
                key="2"
                label="title"
                span={2}
                children={post?.title} />
            <Descriptions.Item
                key="3"
                label="body"
                span={3}
                children={post?.body} />
        </Descriptions>
    )
}