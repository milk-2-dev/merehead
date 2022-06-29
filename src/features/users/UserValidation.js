import * as Yup from 'yup'

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'must be at least 2 characters long')
    .max(60, 'must be no more than 60 characters'),
  surname: Yup.string()
    .required('Required')
    .min(2, 'must be at least 2 characters long')
    .max(60, 'must be no more than 60 characters'),
  desc: Yup.string()
    .required('Required')
    .min(2, 'must be at least 2 characters long')
    .max(1500, 'must be no more than 1500 characters'),
})
