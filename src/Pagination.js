import React from 'react'

const Pagination = (props) => {

    let{onNext, pageNum, onPrev} = props;

  return (
    <div className='flex justify-center my-8'>
        <div onClick={onPrev} className='border-2 border-blue rounded-xl'>
            Previous
        </div>
        <div className='border-2 border-blue'>
            {pageNum}
        </div>
        <div onClick={onNext} className='border-2 border-blue rounded-xl'>
            Next
        </div>
    </div>
  )
}

export default Pagination