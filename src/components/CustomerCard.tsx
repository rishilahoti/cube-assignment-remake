
import styles from '../styles/CustomerCard.module.css';

interface CustomerCardProps {
  customer: { id: number, name: string, title: string, details: string };
  isSelected: boolean;
  onSelect: (customer: { id: number, name: string, title: string, details: string }) => void;
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

