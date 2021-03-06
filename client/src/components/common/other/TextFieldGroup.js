import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
    name,
    placeholder,
    label,
    type,
    error,
    info,
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                <h4>{label}</h4>
            </label>
            <input
                type={type}
                name={name}
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error
                })}
                onChange={onChange}
                placeholder={placeholder}
            />
            <small className="form-text text-muted">{info}</small>
            <div className="invalid-feedback">
                <h5>{error}</h5>
            </div>
        </div>
    );
};

TextFieldGroup.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func
};

export default TextFieldGroup;
