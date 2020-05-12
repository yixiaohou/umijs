// import React, { useState, Component } from 'react';
// import { Form, Row, Col, Input, Button } from 'antd';
// import { DownOutlined, UpOutlined } from '@ant-design/icons';

// export default class index2 extends Component {
//     expand: any;
//     // private [expand] = useState(false);
//     // private [expand, setExpand] = useState(false);
//     // [form] = Form.useForm();

//     const getFields = () => {
//         const count = this.expand ? 10 : 6;
//         const children = [];
//         for (let i = 0; i < count; i++) {
//             children.push(
//                 <Col span={8} key={i}>
//                     <Form.Item
//                         name={`field-${i}`}
//                         label={`Field ${i}`}
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Input something!',
//                             },
//                         ]}
//                     >
//                         <Input placeholder="placeholder" />
//                     </Form.Item>
//                 </Col>,
//             );
//         }
//         return children;
//     };

//     const onFinish = values => {
//         console.log('Received values of form: ', values);
//     };
//     render() {

//         return (
//             <Form
//                 form={form}
//                 name="advanced_search"
//                 className="ant-advanced-search-form"
//                 onFinish={this.onFinish}
//             >
//                 <Row gutter={24}>{getFields()}</Row>
//                 <Row>
//                     <Col span={24} style={{ textAlign: 'right' }}>
//                         <Button type="primary" htmlType="submit">
//                             Search
//                 </Button>
//                         <Button
//                             style={{ margin: '0 8px' }}
//                             onClick={() => {
//                                 form.resetFields();
//                             }}
//                         >
//                             Clear
//                 </Button>
//                         <a
//                             style={{ fontSize: 12 }}
//                             onClick={() => {
//                                 setExpand(!expand);
//                             }}
//                         >
//                             {expand ? <UpOutlined /> : <DownOutlined />} Collapse
//                 </a>
//                     </Col>
//                 </Row>
//             </Form>
//         );

//     }
