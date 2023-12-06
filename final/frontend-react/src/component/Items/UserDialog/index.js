
import { Link } from 'react-router-dom';
import styles from './UserDialog.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import ViewBookingAdmin from '../../Page/ViewBooking_Admin/ViewBookingAdmin';
import ViewBookingUser from '../../Page/ViewBooking_User/ViewBookingUser';

const cx = classNames.bind(styles);

function UserDialog({ onClose }) {
  const navigate = useNavigate();

  const handleQuit = () => {
    localStorage.removeItem('token-user');
    localStorage.removeItem('token-admin');
    localStorage.removeItem('accountID');
    localStorage.removeItem('currentRole');
    onClose();
    navigate('/');
    window.location.reload();
  };
  if (localStorage.getItem("currentRole") === 'user'){
    return (
      <div className={cx('dialog')}>
          <div className={cx('wrapper-items')}>
              <ul>
                <li> <Link to = "/home/viewBooking">View your Booking</Link></li>
                <li onClick={handleQuit}>Log out</li>
              </ul>
          </div>
      </div>
  )
  }
  else{
    return(

    <div className={cx('dialog')}>
    <div className={cx('wrapper-items')}>
        <ul>
          <li> <Link to = "/homeAd/viewBooking">View your Booking</Link></li>
          <li onClick={handleQuit}>Log out</li>
        </ul>
    </div>
</div>
    )
  }
    
}

export default UserDialog