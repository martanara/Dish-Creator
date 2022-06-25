import styles from './InputField.module.scss';

const InputField = (props) => {
	return (
		<input 
			className={styles.input} 
			required 
			value={props.value} 
			onChange={props.onChange} 
			placeholder={props.placeholder} 
			type={props.type} 
			min={props.min}
			max={props.max}
			step={props.step}
		/>
	)	
};

export default InputField;