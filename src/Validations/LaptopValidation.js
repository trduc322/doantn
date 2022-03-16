import * as yup from 'yup'

export const laptopSchema = yup.object().shape({
    LaptopModel: yup.string().required(),
    LaptopPrice: yup.number().required().positive()
})
export const specSchema = yup.object().shape({
    LaptopSpecValue: yup.string().required()
})