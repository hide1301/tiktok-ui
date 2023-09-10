import className from 'classnames/bind'
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = className.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )
}

export default Header
