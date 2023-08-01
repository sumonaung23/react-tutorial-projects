import React, { useEffect } from 'react'

<<<<<<< HEAD
const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
=======
const Alert = () => {
  return <h2>alert component</h2>
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
}

export default Alert
