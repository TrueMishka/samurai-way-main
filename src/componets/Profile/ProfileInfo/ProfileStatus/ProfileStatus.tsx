import React, {useEffect, useState} from 'react';

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

    useEffect(() => {
        setInputValue(props.status)
    }, [props.status])

    return (
        <div>
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

/*export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.props.status)
    }

    onStatusChange = (value: string) => {
        this.setState({
            status: value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <span>status: </span>
                {this.state.editMode
                    ? <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={(e) => this.onStatusChange(e.currentTarget.value)}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.state.status || 'empty status'}</span>}
            </div>
        );
    }
}*/