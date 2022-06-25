import styles from './SelectField.module.scss';

const Select = (props) => {
	return (
		<select onChange={props.onChange} className={styles.select} value={props.value}>
			{props.options.map((option) => 
				(
					<option key={option} value={option}>{option}</option>
				)
			)}
		</select>
	)
};

export default Select;