import React from 'react'
import usePagination from '../../hooks/usePagination'
import { DOTS } from '../../hooks/usePagination'
import './Pagination.scss'

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className='pagination-container pagination-bar'>
      <li
        className={`pagination-item ${currentPage === 1 ? 'disabled' : null}`}
        onClick={onPrevious}
      >
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className='pagination-item dots'>&#8230;</li>
        }

        return (
          <li
            key={`page-${pageNumber}`}
            className={`pagination-item ${
              pageNumber === currentPage ? 'selected' : null
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? 'disabled' : null
        }`}
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
    </ul>
  )
}

export default Pagination
