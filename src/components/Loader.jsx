import React from 'react'

import Spinner from 'react-bootstrap/Spinner'

export default function Loader() {
    return <div className="loader-wrapper"><Spinner animation="border" role="status" /></div>
}

