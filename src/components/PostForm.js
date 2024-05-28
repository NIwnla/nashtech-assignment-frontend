import { Button, Form, Input } from "antd"
import React, { useEffect } from "react";

export default function PostForm(props) {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            id: props?.value?.id,
            title: props?.value?.title,
            body: props?.value?.body
        })
    })
    const SubmitButton = ({ form, children }) => {
        const [submittable, setSubmittable] = React.useState(false);
        // Watch all values
        const values = Form.useWatch([], form);
        React.useEffect(() => {
            form.validateFields({
                validateOnly: true,
            })
                .then(() => setSubmittable(true))
                .catch(() => setSubmittable(false));
        }, [form, values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable}>
                {children}
            </Button>
        );
    };
    return (
        <div>
            <h1>{props?.title}</h1>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={props?.onFinish}
                onFinishFailed={props?.onFinishFailed}>
                <Form.Item
                    label="Id"
                    name="id"
                    hidden>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your title!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Body"
                    name="body"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your body!',
                        },
                    ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <SubmitButton form={form}>Submit</SubmitButton>
                </Form.Item>
            </Form>
        </div>
    )
}