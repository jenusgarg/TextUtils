import * as Yup  from "yup";

export const signUpSchema=Yup.object({

        username: Yup.string().min(5).max(25).required("Please Enter Your Username from character 5 to 25"),
        email: Yup.string().email().required("Please valid Email"),
        Password: Yup.string().min(8).required("Your password must contain at least 8 characters"),
        Confirm_Password: Yup.string().required().oneOf([Yup.ref("Password"),null],"Enter the same password as before"),
        college: Yup.string().min(6).required("Please Enter Your College Name"),
        roll_no_id: Yup.string().min(8).required("Please Enter Your College Name"),
    }); 