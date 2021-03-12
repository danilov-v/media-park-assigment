import styled from "styled-components";

export const Label = styled.label`
    cursor: pointer;
`;

export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + ${Label} {
        display: inline-flex;
        align-items: center;
        user-select: none;
        &::before {
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #70707b;
            border-radius: 2px;
            margin-right: 4px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 6px 4.5px;
        }
    }

    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: #0080ff;
    }

    &:not(:disabled):active + label::before {
        background-color: #0080ff;
        border-color: #0080ff;
    }

    &:focus + label::before {
        box-shadow: 0px 0px 0px 2px rgba(0, 128, 255, 0.2);
    }

    &:focus:not(:checked) + label::before {
        border-color: #70707b;
    }

    &:checked + label::before {
        border-color: #0080ff;
        background-color: #0080ff;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 5'%3e%3cpath fill='%23fff' d='M0 2.44144L2.05466 4.50002L6 0.558585L5.43358 0L2.05466 3.375L0.558574 1.87892L0 2.44144Z'/%3e%3c/svg%3e");
    }

    &:disabled + label::before {
        background-color: #70707b;
    }
`;

export const InputWrapper = styled.div`
    display: block;
`;
