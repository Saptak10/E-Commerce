import './Spinner.css';
import Button from '@mui/material/Button';

function Spinner() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='loadingSpinnerContainer'>
      <div className='loadingSpinner'></div>
      <Button variant="contained" onClick={refreshPage}>Reload the Page</Button>
    </div>
  )
}

export default Spinner
