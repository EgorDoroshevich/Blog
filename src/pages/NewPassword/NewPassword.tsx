import React from "react";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import Header from "../../components/Header";

const NewPassword = () => {
    return (
        <div>
            <Header />
            <div>
                <FormPagesContainer
                    title={"New Password"}
                    btnTitle={"Set password"}
                    onSubmit={() => { }}
                >
                    <Input
                        onChange={() => { }}
                        placeholder={"Your password"}
                        title={"Password"}
                    />
                    <Input
                        onChange={() => { }}
                        placeholder={"Confirm password"}
                        title={"Confirm password"}
                    />
                </FormPagesContainer></div>
        </div>
    );
};

export default NewPassword;
