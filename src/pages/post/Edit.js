import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/PostForm";
import { fetchPostById, modifyPost } from "../../services/posts.service";


export default function Edit() {
    const navigate = useNavigate()
    const [post, setPost] = useState()
    const { id } = useParams()
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const post = await fetchPostById(id);
                setPost(post);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPost();
    },[id]);

    const onFinish = async (values) => {
        try {
            const updatedPost = await modifyPost(id, values);
            console.log('Success:', updatedPost);
            navigate("/posts")
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <PostForm
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            title="Edit"
            value={post} />
    )
}