import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/373670763_997037478011979_1138925894912258855_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5614bc&_nc_ohc=mdZ5zMEjbmUAX89rCS5&_nc_oc=AQneWxrh9lQ4sndYBPP-q28Df_Z3NhvfQzqy0YtWWv4Mn0dlaSXCJrw_llvIZuXFmhI&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCHuaTOTTARBh-fsMCss3OtsP2eYSKsQupekA7q36mthA&oe=64F7A109"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Khuc Thi Huong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>vutotoite</span>
            </div>
        </div>
    )
}

export default AccountItem
