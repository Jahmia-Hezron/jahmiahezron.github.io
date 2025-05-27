interface IconButtonProps {
  icon: React.ReactNode;
  link: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, link, ariaLabel }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="IconButton"
    >
      {icon}
    </a>
  );
};

export default IconButton;
