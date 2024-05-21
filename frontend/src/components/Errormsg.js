import Alert from 'react-bootstrap/Alert';

function Errormsg({children}) {
  return (
    <Alert variant="danger">
        {children}
    </Alert>
  );
}

export default Errormsg;