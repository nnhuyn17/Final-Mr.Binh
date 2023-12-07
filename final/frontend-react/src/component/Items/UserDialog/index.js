
import { Link } from 'react-router-dom';
import styles from './UserDialog.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';


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
              <li><h3 className={cx('text-menu')}>Menu </h3></li>

                <li className={cx('no-color')}>
                <Link to={`/home/viewBookingUser/${localStorage.getItem("accountID")}`} className={cx('no-color')}>
                  View your Booking
                </Link>
                </li>
                <li className={cx('no-color')} onClick={handleQuit}>Log out</li>
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
        <li><h3 className={cx('text-menu')}>Menu </h3></li>

          <li className={cx('no-color')}> <Link to = "/homeAd/viewBooking" className={cx('no-color')}>View your Booking</Link></li>
          <li className={cx('no-color')}> <Link to = "/homeAd/viewUser" className={cx('no-color')} >View Users</Link></li>
          <li onClick={handleQuit} className={cx('no-color')} >Log out</li>
        </ul>
    </div>
</div>
    )
  }
    
}

export default UserDialog