import { useState } from 'react';
import '../assets/css/components/password-input.css';

import iconShow from '../assets/img/icons/icon_show.svg';
import iconHide from '../assets/img/icons/icon_hide.svg';

export default function PasswordInput({ placeholder, value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className='password-input'>
      <input type={visible ? 'text' : 'password'} placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
      <img src={visible?iconHide:iconShow} onClick={() => setVisible(!visible)} />
    </div>
  )
}
