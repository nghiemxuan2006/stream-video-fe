import React, { useState } from 'react'
import Button from '../../components/commons/Button'

const Home = () => {
    return (
        <div>
            <div>Home</div>
            <Button _onClick={() => alert('Button Clicked!')}>
                Click Me
            </Button>
        </div>
    )
}

export default Home