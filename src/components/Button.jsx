const Button = ({
	Icon,
	size,
	btnClassName,
	spanClassName,
	children,
	onClick,
	badge,
	logoClassName,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${btnClassName} ${badge ? 'relative' : ''}`}
		>
			{Icon && <Icon className={logoClassName} size={size} />}
			{children && <span>{children}</span>}
			{badge !== undefined && <span className={spanClassName}>{badge}</span>}
		</button>
	);
};

export default Button;
