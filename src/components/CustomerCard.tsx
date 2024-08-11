
import styles from '../styles/CustomerCard.module.css';
import { Customer } from '../data/customers';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: (customeDetails: Customer) => void;
}

const CustomerCard = ({ customer, isSelected, onSelect }: CustomerCardProps) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(customer)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
      <p>{customer.details}</p>
    </div>
  );
};

export default CustomerCard;

