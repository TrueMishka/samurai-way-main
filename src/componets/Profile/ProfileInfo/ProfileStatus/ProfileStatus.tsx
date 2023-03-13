import React, {useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(props.status)

    const onClickStatusHandler = () => {
        setEditMode(true)
    }

    const onBlurStatusHandler = () => {
        props.updateStatus(inputValue)
        setEditMode(false)
    }

    return (
        <div>
            <span>status: </span>
            {editMode
                ? <input
                    autoFocus={true}
                    onBlur={onBlurStatusHandler}
                    value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}/>
                : <span onDoubleClick={onClickStatusHandler}>{props.status || 'empty status'}</span>}
        </div>
    );
};