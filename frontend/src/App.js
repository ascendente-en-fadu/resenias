import { Button } from './components';
import styles from './styles';

/**
 *
 * @returns
 */
function App() {
  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <Button text='Una carrera' />
        <Button text='Otra carrera' />
        <Button text='Otra carrera más' />
      </div>
    </div>
  );
}

export default App;
