import { useEffect, useState, useRef } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import * as searchServices from '~/apiServices/searchServices'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'
import styles from './Search.module.scss'

const cx = className.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        // Nếu giá trị của searchValue là chuỗi rỗng thì sẽ return => không chạy các hàm bên dưới
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounced)

            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()
    }, [debounced])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const hanldeHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={hanldeHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    onFocus={() => {
                        setShowResult(true)
                    }}
                />

                {
                    // searchValue có giá trị (true) thì mới hiển thị nút xoá
                    !!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {<FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    )
                }

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>{<SearchIcon />}</button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
