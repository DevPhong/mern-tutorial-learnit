import Button from "react-bootstrap/Button"
import playIcon from "../../assets/play-btn.svg"
import editIcon from "../../assets/pencil.svg"
import deleteIconForm from "../../assets/trash.svg"
import { useContext } from "react"
import { PostContext } from "../../contexts/PostContext"

const ActionButtons = ({ url, _id }) => {

    const { deletePost, findPostId, showUpdatePostModal, setShowUpdatePostModal } = useContext(PostContext)

    const handleChoosePost = (postId) => {
        findPostId(postId)
        setShowUpdatePostModal(true)
    }

    return (
        <>
            <Button className="post-button" href={url}>
                <img src={playIcon} alt="play" width={32} height={32} />
            </Button>

            <Button className="post-button">
                <img src={editIcon} alt="play" width={24} height={24} onClick={handleChoosePost.bind(this, _id)} />
            </Button>

            <Button className="post-button" onClick={deletePost.bind(this, _id)}>
                <img src={deleteIconForm} alt="play" width={24} height={24} />
            </Button>
        </>
    )
}

export default ActionButtons