import React, {useEffect, useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import './OpenApiForm.scss';

const OpenApiForm = () => {
    const [searchParams] = useSearchParams();
    const [schema, setSchema] = useState(null);
    const [formData, setFormData] = useState({});
    const [copied, setCopied] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const encodedSchema = searchParams.get('schema');
        if (encodedSchema) {
            try {
                const decodedString = decodeURIComponent(atob(encodedSchema));
                const decodedSchema = JSON.parse(decodedString);
                setSchema(decodedSchema);
            } catch (error) {
                console.error('Error decoding schema:', error);
            }
        }
    }, [searchParams]);

    const handleFormChange = ({formData}) => {
        setFormData(formData);
    };

    const handleSubmit = ({formData}, e) => {
        // Form is valid, proceed to copy data
        const jsonData = JSON.stringify(formData, null, 2);
        navigator.clipboard.writeText(jsonData).then(
            () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            },
            (err) => {
                console.error('Could not copy text: ', err);
                alert(`复制失败: ${err.message}\n请打开控制台查看详情`);
            }
        );
    };

    const copyToClipboard = () => {
        formRef.current.submit();
    };

    const handleRestore = () => {
        const jsonInput = prompt('请粘贴数据:');
        if (jsonInput) {
            try {
                const data = JSON.parse(jsonInput);
                setFormData(data);
            } catch (error) {
                alert('无效的数据');
            }
        }
    };

    const uiSchema = {
        slides: {
            'ui:options': {
                addable: true,
                orderable: true,
                removable: true,
            },
        },
    };

    if (!schema) {
        return <div>Loading schema...</div>;
    }

    return (
        <div className={'form-root'}>
            <Form
                schema={schema}
                formData={formData}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                validator={validator}
                uiSchema={uiSchema}
                ref={formRef}
            >
                <div className="btn-group">
                    <button type="button" onClick={copyToClipboard} className="btn btn-primary">
                        {copied ? '复制成功' : '复制数据'}
                    </button>
                    <button type="button" onClick={handleRestore} className="btn" style={{float: 'right'}}>
                        从之前复制的数据中恢复表单值
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default OpenApiForm;
