import classNames from 'classnames'
import { useState, forwardRef } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        // Nếu xảy ra lỗi sẽ lấy url mà customFallback(fallback) truyền vào, nếu không truyền fallback vào thì mặc định vẫn lấy images.no
        setFallback(customFallback)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src} // src mặc định sẽ là prop src được truyền vào, nếu xảy ra lỗi sẽ lấy fallback
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

export default Image
