import React, {useState} from 'react';

type PropsType = {
    status: string
}

export const ProfileStatus = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onClickStatus = () => {
        setEditMode(true)
    }

    const onBlurStatus = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode
                ? <input autoFocus={true} onBlur={onBlurStatus} value={props.status}/>
                : <span onDoubleClick={onClickStatus}>{props.status}</span>}
        </div>
    );
};