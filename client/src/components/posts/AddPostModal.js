import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';

const AddPostModal = () => {

    const { showAddPostModal, setShowAddPostModal, addPost, setShowToast } = useContext(PostContext)

    // State

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        url: '',
        status: 'TO LEARN'
    })

    const { title, description, url } = newPost

    const handleChangeNewPostForm = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    const closeDialog = () => {
        resetAddPostModal()
    }

    const onSubmitPost = async (e) => {
        e.preventDefault()

        const { success, message } = await addPost(newPost)
        resetAddPostModal()

        setShowToast({ show: true, message: message, type: success ? 'success' : 'danger' })
    }

    const resetAddPostModal = () => {
        setNewPost({
            title: '',
            description: '',
            url: '',
            status: 'TO LEARN'
        })
        setShowAddPostModal(false)
    }

    return (
        <>
            <Modal show={showAddPostModal} onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>What do you want to learn?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmitPost}>
                        <Form.Group className="mb-3">
                            <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={handleChangeNewPostForm} />
                            <Form.Text id='title-help' muted>Required</Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Control type='textarea' rows={3} placeholder='Description' name='description' value={description} onChange={handleChangeNewPostForm} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type='text' rows={3} placeholder='Youtube Tutorial URL' name='url' value={url} onChange={handleChangeNewPostForm} />
                        </Form.Group>
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

export default AddPostModal