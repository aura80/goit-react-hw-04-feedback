import { useRef, useEffect, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
// import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  const { options, onLeaveFeedback } = useContext(FeedbackContext);

  const btnRefs = useRef([]);

  useEffect(() => {
    console.log('Buttons refs: ', btnRefs.current);
  })

  return (
    <div>
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          ref={elem => (btnRefs.current[index] = elem)}
          className={styles.button}
          onClick={() => {
            console.log('Button clicked:', option);
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// Eliminates the type checks for props because now they are accessed from the context
// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
