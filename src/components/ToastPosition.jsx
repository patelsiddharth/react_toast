
export default function ToastPosition({toastPosition, setToastPosition}) {
    return (
        <div className='position'>
            <p>Toast Position</p>
            <div className="position-item">
                <span className={toastPosition === 'top-left' ? 'position-item-content checked' : 'position-item-content'}>
                    <input 
                        className='timeout-input'
                        name='position'
                        value='top-left'
                        type='radio'
                        id='top-left'
                        checked={toastPosition === 'top-left'}
                        onChange={(e) => setToastPosition(e.target.value)}
                    />
                    <label htmlFor='top-left'>Top-left</label>
                </span>
                <span className={toastPosition === 'top-right' ? 'position-item-content checked' : 'position-item-content'}>
                    <input 
                        className='timeout-input'
                        name='position'
                        value='top-right'
                        type='radio'
                        id='top-right'
                        checked={toastPosition === 'top-right'}
                        onChange={(e) => setToastPosition(e.target.value)}
                    />
                    <label htmlFor='top-right'>Top-right</label>
                </span>
                <span className={toastPosition === 'bottom-left' ? 'position-item-content checked' : 'position-item-content'}>
                    <input 
                        className='timeout-input'
                        name='position'
                        value='bottom-left'
                        type='radio'
                        id='bottom-left'
                        checked={toastPosition === 'bottom-left'}
                        onChange={(e) => setToastPosition(e.target.value)}
                    />
                    <label htmlFor='bottom-left'>Bottom-left</label>
                </span>
                <span className={toastPosition === 'bottom-right' ? 'position-item-content checked' : 'position-item-content'}>
                    <input 
                        className='timeout-input'
                        name='position'
                        value='bottom-right'
                        type='radio'
                        id='bottom-right'
                        checked={toastPosition === 'bottom-right'}
                        onChange={(e) => setToastPosition(e.target.value)}
                    />
                    <label htmlFor='bottom-right'>Bottom-right</label>
                </span>
            </div>
        </div>
    )
}