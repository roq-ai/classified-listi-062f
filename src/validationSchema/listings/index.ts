import * as yup from 'yup';

export const listingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  category: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
