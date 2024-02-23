import Input from "./index";

export default {
    title: "Form/Input",
    component: Input,
};

export const Primary = {
    args: {
        inputName: "firstName",
    },
}


export const Success = {
    args: {
        inputName: "firstName",
        isSuccess: true,
    },
}


export const Error = {
    args: {
        inputName: "firstName",
        isError: true,
        validationMessage: "An error has occured",
    },
}
