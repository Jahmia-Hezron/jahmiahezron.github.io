interface IconButtonProps {
  icon: string;
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
        <div className='Image'>
            <img src={icon} alt="Placeholder" loading='eager' decoding='async' />
        </div>
    </a>
  );
};

export default IconButton;
