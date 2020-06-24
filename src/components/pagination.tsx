import React from 'react'
import { range } from 'lodash'
import classNames from 'classnames'

export interface PaginationProps {
  page: number
  size?: number
  totalElements: number
  onPageChange(page: number): void
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  size = 5,
  totalElements,
  onPageChange
}) => {
  const pages = range(0, Math.ceil(totalElements / size))
  return (
    <div className="flex items-center justify-between">
      <div>
        <nav className="relative z-0 inline-flex shadow-sm">
          {pages.length > 0 && (
            <span
              className={classNames(
                'select-none relative mr-1 inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150',
                {
                  'cursor-pointer': page !== 0,
                  'pointer-events-none': page === 0
                }
              )}
              aria-label="Previous"
              onClick={() => onPageChange(page - 1)}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
          {pages.map(i => (
            <span
              key={i}
              onClick={() => onPageChange(i)}
              className={classNames(
                'cursor-pointer mr-1 -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150',
                { 'border-green-600 pointer-events-none': page === i }
              )}
            >
              {i + 1}
            </span>
          ))}
          {pages.length > 0 && (
            <span
              className={classNames(
                'select-none relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150',
                {
                  'cursor-pointer': page !== pages.length - 1,
                  'pointer-events-none': page === pages.length - 1
                }
              )}
              aria-label="Next"
              onClick={() => onPageChange(page + 1)}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Pagination
