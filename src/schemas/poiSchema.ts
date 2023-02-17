import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().required(),
    X: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
    Y: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
    })
export default schema