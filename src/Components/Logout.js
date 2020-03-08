import React from 'react'

export default function Logout() {
    return (
        <div>
            {localStorage.clear()}
            {window.location.reload(false)}
        </div>
    )
}
