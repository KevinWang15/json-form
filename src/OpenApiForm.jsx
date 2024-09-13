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
                alert(`Error copying data to clipboard: ${err.message}\nPlease try again or check console for more details.`);
            }
        );
    };

    const copyToClipboard = () => {
        formRef.current.submit();
    };

    const handleRestore = () => {
        const jsonInput = prompt('Please enter your JSON data:');
        if (jsonInput) {
            try {
                const data = JSON.parse(jsonInput);
                setFormData(data);
            } catch (error) {
                alert('Invalid JSON input.');
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
                        {copied ? 'Data Copied!' : 'Copy Data as JSON'}
                    </button>
                    <button type="button" onClick={handleRestore} className="btn" style={{float: 'right'}}>
                        Restore Form Data from JSON
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default OpenApiForm;
