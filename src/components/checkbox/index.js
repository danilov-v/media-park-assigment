import { Label, InputCheckBox, InputWrapper } from "./styled";
import PropTypes from "prop-types";

export const CheckBox = ({ connectId, children }) => {
    return (
        <InputWrapper>
            <InputCheckBox id={connectId} />
            <Label htmlFor={connectId}>{children}</Label>
        </InputWrapper>
    );
};

CheckBox.propTypes = {
    connectId: PropTypes.string,
    children: PropTypes.node,
};
