import { useState } from 'react';
import './App.css';
import ToastNotification from './components/ToastNotification.jsx';
import ToastPosition from './components/ToastPosition.jsx';

function App() {
    const [msg, setMessage] = useState('🦄 Wow so easy !')
    const [toastTimeout, setToastTimeout] = useState(3000)
    const [toastList, setToastList] = useState([]);
    const [toastPosition, setToastPosition] = useState('top-right');

    function showToast() {
        const newToast = {
            id: Math.random(),
            position: toastPosition,
            top: 'unset', 
            bottom: 'unset', 
            left: 'unset', 
            right: 'unset'
        }

        const startIndex = toastList.filter(i => i.position === toastPosition).length;

        const po = ((startIndex * 50) + 10) + 'px';
        switch(toastPosition)
        {
            case 'top-left':
            {
                newToast.top = po;
                newToast.left = '10px';
                break;
            }
            case 'top-right':
            {
                newToast.top = po;
                newToast.right = '10px';
                break;
            }
            case 'bottom-left':
            {
                newToast.bottom = po;
                newToast.left = '10px';
                break;
            }
            case 'bottom-right':
            {
                newToast.bottom = po;
                newToast.right = '10px';
                break;
            }
        }

        setToastList([...toastList, newToast])
    }

    return (
        <div className='toast-container'>
            <h1>Toast Notification</h1>
            <div className="card">
                <input 
                    className='card-input' 
                    value={msg} 
                    placeholder='Enter toast message'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <span className='card-btn' onClick={showToast}>
                    🚀 Show Toast
                </span>
            </div>
            <div className='timeout'>
                <p>Toast Timeout</p>
                <input 
                    className='timeout-input'
                    value={toastTimeout} 
                    type='number'
                    placeholder='Toast Timeout'
                    onChange={(e) => setToastTimeout(e.target.value)}
                />
            </div>
            <ToastPosition 
                toastPosition={toastPosition} 
                setToastPosition={setToastPosition}
            />
            {
                toastList.map((toast => (
                    <ToastNotification
                        key={toast.id}
                        toast={toast}
                        msg={msg}
                        toastTimeout={toastTimeout}
                        toastList={toastList}
                        setToastList={setToastList}
                    />
                )))
            }
        </div>
    )
}

export default App
