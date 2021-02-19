import React, { memo } from 'react'
import { useParams } from 'react-router';
import { Alert, Button, Drawer } from 'rsuite'
import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuery, useModalState } from '../../../misc/custom-hooks'
import { database } from '../../../misc/firebase';
import EbitableInput from '../../EditableInput';


const EditRoomBtnDrawer = () => {

    const {isOpen, open, close} = useModalState();

    const {chatId} = useParams();

    const isMobile = useMediaQuery('(max-width: 992px)')

    const name = useCurrentRoom(v => {return v.name});
    const description = useCurrentRoom(v => {return v.description});


    const updateData = (key, value) => {
        database.ref(`/rooms/${chatId}`).child(key).set(value).then(() => {
            Alert.success('Successfuly updated', 4000);
        }).catch((err) => {
            Alert.error(err.message, 4000);
        })
    };

    const onNameSave = (newName) => {
        updateData('name', newName);
    };

    const onDescriptionSave = (newDescription) => {
        updateData('description', newDescription);
    };


    return (
        <div>
            <Button className="br-circle" size="sm" color="red" onClick={open}>
                A
            </Button>

            <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
                <Drawer.Header>
                    <Drawer.Title>
                        Edit Room
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <EbitableInput initialValue={name} onSave={onNameSave} label={<h6 className="mb-2">Name</h6> } emptyMsg="Name can't be empty" />
                    <EbitableInput componentClass="textarea" rows={5} initialValue={description} onSave={onDescriptionSave} emptyMsg="Description can't be empty" wrapperClassName="mt-3" />
                </Drawer.Body>
                <Drawer.Footer>
                    <Button block onClick={close}>Close</Button>
                </Drawer.Footer>
            </Drawer>
        </div>
    )
}

export default memo(EditRoomBtnDrawer)
