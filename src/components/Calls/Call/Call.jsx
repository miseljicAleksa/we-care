import React from 'react'

import styles from './Call.css'

export const Call = (props) => {
    return (
        <div className={styles.Call}>
            <p>Calls Received</p>
            <p className={styles.callNumber}>987</p>
        </div>
    )
}
