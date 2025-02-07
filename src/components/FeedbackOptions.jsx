import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {/* <h2>Please leave feedback</h2> */}

    {options.map(option => (
      <button
        key={option}
        type="button"
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
