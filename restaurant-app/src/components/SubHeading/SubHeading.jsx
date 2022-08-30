import React from 'react';

import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{ marginButton: 'rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='sponn__img'/>
  </div>
);

export default SubHeading;
