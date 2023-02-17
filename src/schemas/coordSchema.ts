import * as yup from 'yup';
const schema2 = yup.object().shape({
    X: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
    Y: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
    Dmax: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
    })
export default schema2