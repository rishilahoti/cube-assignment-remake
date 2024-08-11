'use client'
import { useState } from 'react';
import CustomerCard from '../components/CustomerCard';
import CustomerDetails from '../components/CustomerDetails';
import { initialCustomers, Customer } from '../data/customers';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [customers] = useState<Customer[]>(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className={styles.container}>
      <div className={styles.customerList}>
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onSelect={handleSelectCustomer}
          />
        ))}
      </div>
      <div className={styles.customerDetails}>
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
}
