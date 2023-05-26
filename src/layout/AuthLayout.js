import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heder from './Header'
import Sidebar from './Sidebar'


function AuthLayout({ children }) {
    return (
        <Row className='w-full m-0'>
            <Col lg={2} className='p-0' >
                <Sidebar />
            </Col>
            <Col lg={10} className='p-0'>
                <Heder />
                <div>{children} </div>
            </Col>
        </Row>
    )
}

export default AuthLayout