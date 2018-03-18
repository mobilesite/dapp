import React, {PureComponent} from 'react';
import classnames from 'classnames';
import './index.scss';

interface CheckboxProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    checked?: boolean;
    label: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

function getChecked(props, defaultChecked) {
    if ('checked' in props && props.checked) {
      return props.checked;
    }
    return defaultChecked;
}

export default class Checkbox extends PureComponent<CheckboxProps, any>{
    static defaultProps = {
        prefixCls: 'myui__checkbox',
        checked: false,
        disabled: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            checked: getChecked(props, false),
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked,
            });
        }
    }
    
    onValueChange = () => {
        const { disabled, onChange } = this.props;
        if (disabled) {
            return;
        }
    
        const checked = !this.state.checked;
        this.setState({ checked });
        if (typeof onChange === 'function') {
            onChange(checked);
        }
    }

    render(){
        const { prefixCls, className, disabled, label, style, } = this.props;
        const { checked } = this.state;
    
        const cls = classnames(prefixCls, {
            [`${prefixCls}--checked`]:  checked,
            [`${prefixCls}--disabled`]:  disabled,
        }, className);
        
        return (
            <label className={cls}>
                <div className={`${prefixCls}__icon`}></div>
                <input type="checkbox" className={`${prefixCls}__input`} disabled={disabled} checked={checked} onChange={this.onValueChange}/>
                <span className={`${prefixCls}__title`}>{label}</span>
            </label>
        )
    }
}