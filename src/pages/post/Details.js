import { useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails";

export default function Details() {
    const { id } = useParams()

    return (
        <PostDetails id={id} />
    )
}