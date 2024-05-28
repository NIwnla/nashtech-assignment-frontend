import React from "react";
import PostForm from "../../components/PostForm";
import { addPost } from "../../services/posts.service";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            const createdPost = await addPost(values);
            console.log('Success:', createdPost);
            navigate("/posts")
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <PostForm
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            title="Create" />
    )
}