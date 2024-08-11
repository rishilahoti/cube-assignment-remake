
import { useEffect, useState } from 'react';
import PhotoGrid from './PhotoGrid';
import styles from '../styles/CustomerDetails.module.css';

interface CustomerDetails {
  customer: { id: number, name: string, details: string, photos: string[] } | null;
}

const CustomerDetails = ({ customer }: CustomerDetails) => {

  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (customer) {
      const newPhotos = customer.photos.map((_, index) => 
        `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
      );
      setPhotos(newPhotos);
    }
  }, [customer]);

  if (!customer) {
    return <div className={styles.placeholder}>Select a customer to view details</div>;
  }

  return (
    <div className={styles.details}>
      <h2>{customer.name}</h2>
      <p>{customer.details}</p>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default CustomerDetails;
