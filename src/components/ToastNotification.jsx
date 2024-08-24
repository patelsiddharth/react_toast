import { useEffect, useRef, useState } from 'react';
import styles from './toastnotification.module.css';

export default function ToastNotification({toast, msg, toastTimeout, toastList, setToastList}) {;
    const [progressValue, setProgressValue] = useState(toastTimeout);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        setToastMessage(msg);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressValue(progressValue - 1)
            if(progressValue === 0)
            {
                handleClose();
                clearInterval(interval)
            }
        }, 1)
        return () => {
            clearInterval(interval)
        }
    });
    
    function handleClose() {
        const list = toastList.filter(iToast => iToast.id !== toast.id);
        let count = 0;
        list.forEach((item) => {
            if(item.position === toast.position)
            {
                if(toast.position.includes('top'))
                {
                    item.top = ((count * 50) + 10) + 'px';
                }
                else if(toast.position.includes('bottom'))
                {
                    item.bottom = ((count * 50) + 10) + 'px';
                }
                count++;
            }
        });
        setToastList([...list]);
    }

    return (
        <div className={styles.toastContainer} style={
            {
                top: toast.top,
                bottom: toast.bottom,
                left: toast.left,
                right: toast.right 
            }
        }>
            <span>{toastMessage}</span>
            <span 
                className={styles.closeToast}
                onClick={handleClose}
            >
                <i className="fa-solid fa-xmark"></i>
            </span>
            <progress 
                className={styles.toastProgress} 
                value={progressValue}
                max={toastTimeout}
                min={0}
            ></progress>
        </div>
    )
}