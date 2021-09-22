// Functional Component
const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Default prop message when no prop is used
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
