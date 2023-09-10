import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'
import styles from './Menu.module.scss'

const cx = className.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1] // Lấy phần tử cuối cùng của mảng

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Kiểm tra xem phần tử có children ko
            const isParent = !!item.children

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]) // Push thêm một phần tử (children) vào cuối mảng
                        } else {
                            // Nếu không có children thì khi click vào sẽ xữ lý logic
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    return (
        <Tippy
            interactive
            delay={(0, 700)}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1))
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
