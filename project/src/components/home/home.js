import React, { PureComponent } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <Header/>
            <h1>home</h1>
            <Footer />
            </>
        )
    }
}

export default Home