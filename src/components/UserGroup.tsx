import React from 'react'

const style = {
    container: {
        flex: 1,
        backgroundColor: '#081F2E',
        width: '1000px',

    },
    icon: {
        width: '10%',
        height: '10%',
        margin: '10px',
    },
    bubble: {
        margin: '20px',
    },
    left: {
        transform: 'rotate(90deg)'
    },
    top: {
        transform: 'rotate(180deg)',
        marginLeft: '100px',
    },
    right: {
        transform: 'rotate(-90deg)'
    }
}

export default function UserGroup() {
    return (
        <div style={style.container}>
            <img style={{ ...style.icon, ...style.left }} src="/icons/users/Group 1.svg" alt="Adult Male Icon" />
            <img style={{ ...style.icon, ...style.right }} src="/icons/users/Group 9.svg" alt="Young Male Icon" />
            <img style={{ ...style.icon, ...style.top }} src="/icons/users/Group 7.svg" alt="Young Female Icon" />
            <img style={style.icon} src="/icons/users/Group 10.svg" alt="Adult Female Icon" />
            <img src="/icons/bubbles/SpeechBubble1.svg" alt="Speech Bubble1" />
            <img src="/icons/bubbles/SpeechBubble2.svg" alt="Speech Bubble2" />
            <img src="/icons/bubbles/SpeechBubble3.svg" alt="Speech Bubble3" />
        </div>
    )
}
