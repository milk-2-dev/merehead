import React from 'react'

const File = ({ field, form: { touched, errors }, ...props }) => {
  const { value: propValue, ...propsWithoutValue } = props
  const { value: fieldValue, ...fieldWithoutValue } = field
  return (
    <div>
      <label className='file'>
        <span
          className='file-custom'
          data-file-name={propValue !== '' ? propValue : 'Upload your file'}
        ></span>
        <input
          className='hidden'
          type='file'
          value=''
          {...fieldWithoutValue}
          {...propsWithoutValue}
          aria-label='File browser example'
        />
      </label>
      <div className='h-10 mb-[6px] pl-4 leading-none'>
        <p className='text-xs text-red-400'>
          {errors['photo'] && touched['photo'] && errors['photo']}
          {errors['photoResolution'] && errors['photoResolution']}
        </p>
      </div>
    </div>
  )
}

export default File
