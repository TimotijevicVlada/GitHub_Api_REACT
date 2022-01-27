export const onChange = (value) => ({
    type: 'UPDATE_INPUT_VALUE',
    payload: value
})

export const onChangeError = () => ({
    type: "UPDATE_INPUT_ERROR"
})


