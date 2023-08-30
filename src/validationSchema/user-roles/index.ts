import * as yup from 'yup';

export const userRoleValidationSchema = yup.object().shape({
  role_name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
