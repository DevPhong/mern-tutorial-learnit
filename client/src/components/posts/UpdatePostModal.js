import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';

const UpdatePostModal = () => {

    const { postState: { post }, showUpdatePostModal, setShowUpdatePostModal, updatePost, setShowToast } = useContext(PostContext)

    // State

    useEffect(() => {
        setUpdatedPost(post)
    }, [post])

    const [updatedPost, setUpdatedPost] = useState(post)

    const { title, description, url, status } = updatedPost

    const handleChangeUpdatedPostForm = (e) => {
        setUpdatedPost({
            ...updatedPost,
            [e.target.name]: e.target.value
        })
    }

    const closeDialog = () => {
        setUpdatedPost(post)
        setShowUpdatePostModal(false)
    }

    const onSubmitPost = async (e) => {
        e.preventDefault()

        const { success, message } = await updatePost(updatedPost)
        setShowUpdatePostModal(false)

        setShowToast({ show: true, message: message, type: success ? 'success' : 'danger' })
    }

    return (
        <>
            <Modal show={showUpdatePostModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Making progress?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmitPost}>
                        <Form.Group className="mb-3">
                            <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={handleChangeUpdatedPostForm} />
                            <Form.Text id='title-help' muted>Required</Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Control type='textarea' rows={3} placeholder='Description' name='description' value={description} onChange={handleChangeUpdatedPostForm} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type='text' rows={3} placeholder='Youtube Tutorial URL' name='url' value={url} onChange={handleChangeUpdatedPostForm} />
                        </Form.Group>

                        <Form.Control as='select' value={status} name='status' onChange={handleChangeUpdatedPostForm}>
                            <option value="TO LEARN">TO LEARN</option>
                            <option value="LEARNING">LEARNING</option>
                            <option value="LEARNED">LEARNED</option>
                        </Form.Control>

                        <Modal.Footer>
                            <Button variant="success" onClick={closeDialog}>
                                Close
                            </Button>
                            <Button variant="danger" type='submit'>
                                LearnIt
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdatePostModal