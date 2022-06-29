import React from 'react'
import { Formik, Field } from 'formik'
import { UserSchema } from './UserValidation'
import Input from '../../components/inputs/Input'
import TextArea from '../../components/inputs/TextArea'

const UserForm = ({ initialState, onSubmit }) => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={UserSchema}
      onSubmit={async (values, formikApi) => {
        onSubmit(values, formikApi)
      }}
    >
      {({
        values,
        isValid,
        dirty,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form className='w-full max-w-[380px] ' onSubmit={handleSubmit}>
          <Field
            name='name'
            type='text'
            placeholder='User name'
            onChange={handleChange}
            value={values.name}
            component={Input}
          />

          <Field
            name='surname'
            type='text'
            placeholder='User surname'
            onChange={handleChange}
            value={values.surname}
            component={Input}
          />

          <Field
            name='desc'
            placeholder='User desc'
            onChange={handleChange}
            value={values.desc}
            component={TextArea}
          />

          <button
            type='submit'
            disabled={!isValid || !dirty}
            className='mx-auto block bg-yellow-400 hover:bg-yellow-300 font-normal text-base text-black text-center rounded-full uppercase p-1 min-w-[100px] transition duration-150 ease-in-out 
                disabled:bg-gray-175 disabled:text-white'
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default UserForm
