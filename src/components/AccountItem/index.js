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
                src="https://instagram.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/366008201_17977216502408704_5832993514490000641_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fsgn2-5.fna.fbcdn.net&_nc_cat=104&_nc_ohc=MQhYNdIBAAcAX_6K3py&edm=ACWDqb8AAAAA&ccb=7-5&_nc_e2o=f&oh=00_AfBEqpQNDSMCrhHdqERArqGnyIFnAz9B9oiv94eHdmsVjA&oe=6501364E&_nc_sid=ee9879"
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
