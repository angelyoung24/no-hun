import React from 'react'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <footer className={ footerStyles.background }>
            <p className={ footerStyles.text }> <a className={ footerStyles.text } href="https://www.angelyoung.design">Angel Young</a> | &copy; 2020</p>
        </footer>
    )
}

export default Footer