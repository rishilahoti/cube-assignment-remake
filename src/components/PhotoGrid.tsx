
import { useEffect, useState } from 'react';
import styles from '../styles/PhotoGrid.module.css';

interface PhotoGridProps {
  photos: string[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>(photos);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPhotos = photos.map(
        () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
      );
      setCurrentPhotos(newPhotos);
    }, 10000);

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className={styles.grid}>
      {currentPhotos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} className={styles.photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
