const Button = ({
	Icon,
	size,
	btnClassName,
	spanClassName,
	children,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center gap-2 ${btnClassName}`}
		>
			{Icon && <Icon size={size} />}
			<span className={spanClassName}>{children}</span>
		</button>
	);
};

export default Button;
