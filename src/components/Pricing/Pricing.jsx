import React, { useState } from 'react';
import './Pricing.css';
import { GarkalniServices } from '../../services';
import { motion } from 'framer-motion'

function Pricing() {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Find the service with index 1 from the GarkalniServices array
  const initialService = GarkalniServices.find((service) => service.index === 1);

  const [serviceItem, setServiceItem] = useState({
    index: initialService.index || 0,
    name: initialService.language.lv.name,
    price: initialService.language.lv.price,
    exceptions: initialService.language.lv.exceptions,
  });

  const [activeItemIndex, setActiveItemIndex] = useState(1);

  function popUpServicePrice(service) {
    setServiceItem({
      index: service.index,
      name: service.language.lv.name,
      price: service.language.lv.price,
      exceptions: service.language.lv.exceptions,
    });
    setActiveItemIndex(service.index);
  }

  // Filter GarkalniServices array to get only the services in Latvian (lv)
  const lvServices = GarkalniServices.filter((service) => service.language && service.language.lv);

  return (
    <div className='pricing-section price'>
      <div className='pricing-txt'>
        <h1>PIEDĀVĀJUMI</h1>
        <p>Cenas</p>
      </div>
      <div className='pricing-box'>
        <div className='left-title-section'>
        {lvServices.map((service) => (
  // Check if the service index is not equal to 3 before rendering
  (service.index !== 3 && service.index !== 11) && (
    <div
      className={`pricing-item-title ${activeItemIndex === service.index ? 'active' : ''}`}
      key={service.index}
      onClick={() => popUpServicePrice(service)}
    >
      <h1>{capitalizeFirstLetter(service.language.lv.name)}</h1>
    </div>
  )
))}
        </div>

        <div className='right-pricing-section'>
          {serviceItem.name && (
            <motion.div initial={{ x: -100 }} animate={{ x: 0 }} className='service-info'>
              <h1>{serviceItem.name}</h1>
              {serviceItem.exceptions && <p>{serviceItem.exceptions}</p>}
            </motion.div>
          )}
          <div className='service-info-below'>
            {Object.entries(serviceItem.price).map(([key, value]) => (
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className='item-box' key={key}>
                <div className='service-pricing'>
                  <h1>€{value}</h1>
                </div>
                <div className='service-pricing-title'>
                  <p>{key}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;