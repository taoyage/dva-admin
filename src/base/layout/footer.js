import React from 'react';
import { config } from 'common/js';
import styles from './footer.less';

const Footer = () => (
  <div className={styles.footer}>
    {config.footerText}
  </div>
);

export default Footer;
