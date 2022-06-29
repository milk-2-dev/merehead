import React from 'react'

const Radio = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div className='flex items-center'>
      <input
        className='hidden'
        name={field.name}
        id={props.id}
        type='radio'
        {...field}
        {...props}
      />
      <label
        className='block relative pl-8 cursor-pointer focus:outline-none 
        before:absolute 
        before:w-5 
        before:h-5 
        before:left-0 
        before:top-[50%]
        before:translate-y-[-50%]
        before:rounded-full 
        before:border-regal-blue 
        before:border

        after:invisible
        after:absolute
        after:top-[50%]
        after:translate-y-[-50%]
        after:w-[10px] 
        after:h-[10px] 
        after:left-[5px]
        after:rounded-full 
        after:bg-regal-blue
        label-checked:after:visible
        mb-[7px]'
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  )
}

export default Radio
