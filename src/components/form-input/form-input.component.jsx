import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
    } from './form-input.styles';

const FormInput = ({handleChange, label, ...props}) => (
    <GroupContainer className='group'>
        <FormInputContainer className='form-input' onChange={handleChange} {...props} />
        {
            label ? 
            (<FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
)

export default FormInput;