import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails";
import { removePost } from "../../services/posts.service";

export default function Delete() {
    const navigate = useNavigate()
    const { id } = useParams()
    const handleButtonClick = async (id) => {
        try {
            const deletedPost = await removePost(id);
            console.log('Success:', deletedPost);
            navigate("/posts")
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }
    return (
        <div>
            <PostDetails id={id} />
            <Button
                type="primary"
                danger
                onClick={() => handleButtonClick(id)}
            >
                Delete
            </Button>
        </div>
    )
}