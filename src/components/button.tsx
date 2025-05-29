import { motion } from "framer-motion";

type ButtonProps = {
  label: string;
  name?: string;
  onClick?: () => void;
  href?: string;         // optional link or download target
  download?: boolean;    // trigger download if true
};

const Button = ({ label, name, onClick, href, download = false }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute custom logic if provided
    }

    if (href) {
      if (download) {
        const link = document.createElement("a");
        link.href = href;
        link.download = href.split("/").pop() || "file";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(href, "_blank");
      }
    }
  };

  // Render nothing if no action is defined
  if (!onClick && !href) return null;

  return (
    <motion.button
      whileHover={{ rotate: [0, 5, -5, 5, -5, 0] }}
      transition={{ duration: 0.4 }}
      className={name}
      onClick={handleClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
