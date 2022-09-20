import classes from './index.module.scss'
import Headline from './headline'
import OrderDetails from './../../components/order-details/index'
import { motion } from 'framer-motion'
import { downToUp } from '../../animation'
import { useState } from 'react'
import OrdersHeader from '../../components/OrdersHeader'
import OrdersItemsList from '../../components/OrdersItemsList'
import OrdersInfo from '../../components/OrdersInfo'
import OrdersBreadcrumb from '../../components/OrdersBreadcrumb'

const Orders = () => {
  const [showDetails, setShowDetails] = useState(false)
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      {showDetails ? (
        <motion.section className='orders pt-4'>
          <OrdersBreadcrumb />
          <div className={`row m-0`}>
            <div className={`col-8`}>
              <OrdersHeader type='Delivery' />
              <OrdersItemsList/>
            </div>
            <div className={`col-4`}>
              <OrdersInfo type='Delivery'/>
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.section className='orders pt-4'>
          <div className='container'>
            <motion.div className='row pb-2'>
              <Headline />
            </motion.div>
            <motion.div
              variants={downToUp}
              animate='visible'
              initial='hidden'
              className={`row overflow-auto ${classes.container}`}
            >
              {data.map(item => {
                return (
                  <div className='col-lg-3' key={item}>
                    <OrderDetails setShowDetails={setShowDetails} />
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  )
}

export default Orders
