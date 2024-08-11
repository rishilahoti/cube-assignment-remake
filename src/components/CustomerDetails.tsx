
import PhotoGrid from './PhotoGrid';
import styles from '../styles/CustomerDetails.module.css';

interface CustomerDetailsProps {
  customer: { id: number, name: string, details: string, photos: string[] } | null;
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  if (!customer) {
    return <div className={styles.placeholder}>Select a customer to view details</div>;
  }

  return (
    <div className={styles.details}>
      <h2>{customer.name}</h2>
      <p>{customer.details}</p>
      <PhotoGrid photos={customer.photos} />
    </div>
  );
};

export default CustomerDetails;
