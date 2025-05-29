import { motion } from "framer-motion";

type ButtonProps = {
    label: string;
    name?: string;
    onClick?: () => void;
}


const Button = ({ label, name, onClick }: ButtonProps) => {
    return (
        <motion.button 
            whileHover={{ rotate: [0, 5, -5, 5, -5, 0] }}
            transition={{ duration: 0.4 }}
            className={name} 
            onClick={onClick}
        >
            {label}
        </motion.button>
    );
}


export default Button