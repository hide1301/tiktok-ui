import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faCloudUpload,
    faPeopleArrows,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

const cx = className.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {
    const [searchResult, setSearchReasult] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchReasult([])
        }, 0)
    }, [])

    // Hanlde logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle language change
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            onChange={(e) => {
                                setSearchReasult(e.target.value)
                            }}
                            placeholder="Search account and videos"
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>{<FontAwesomeIcon icon={faCircleXmark} />}</button>

                        {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                        <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://instagram.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/366008201_17977216502408704_5832993514490000641_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fsgn2-5.fna.fbcdn.net&_nc_cat=104&_nc_ohc=MQhYNdIBAAcAX_6K3py&edm=ACWDqb8AAAAA&ccb=7-5&_nc_e2o=f&oh=00_AfBEqpQNDSMCrhHdqERArqGnyIFnAz9B9oiv94eHdmsVjA&oe=6501364E&_nc_sid=ee9879"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
