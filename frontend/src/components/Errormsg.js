import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample({children}) {
  return (
    <Alert variant="danger">
        {children}
    </Alert>
  );
}

export default AdditionalContentExample;