import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
          <span className='loading loading-ring loading-lg' />
        </div>
    );
}

export default LoadingSpinner