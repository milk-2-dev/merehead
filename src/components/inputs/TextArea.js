import React from 'react'

const TextArea = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <textarea
        className='h-[150px] resize-none w-full rounded bg-body border border-solid border-gray-50 px-4 py-[14px] mb-1'
        {...field}
        {...props}
      >
        Привет! Тут просто немного текста внутри тега textarea
      </textarea>
      <div className='h-10 mb-[6px] pl-4 leading-none'>
        {props.hint && props.hint !== '' ? (
          <p className='inline-block w-full text-xs text-gray-150'>
            {props.hint}
          </p>
        ) : null}

        <p className='text-xs text-red-400'>
          {errors[field.name] && touched[field.name] && errors[field.name]}
        </p>
      </div>
    </>
  )
}

export default TextArea
