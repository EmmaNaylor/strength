import React from 'react'
import { useParams } from 'react-router-dom';

const Services = () => {
  const { service } = useParams();
  return (
    <div>Services {service}</div>
  )
}

export default Services