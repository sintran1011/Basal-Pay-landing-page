interface IProps {
  className?: string;
  onClick?: () => void;
}
const CloseIcon = (props: IProps) => {
  const { className, onClick = () => {} } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M18 5.91016L6 18.0902"
        stroke="#787F84"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5.91016L18 18.0902"
        stroke="#787F84"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
