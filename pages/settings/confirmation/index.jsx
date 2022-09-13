import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import hello from '../../../public/images/lock.svg'
import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'
import ReactInputVerificationCode from 'react-input-verification-code'
import { motion } from 'framer-motion'
import { downToUp } from '../../../animation'
import done from '../../../public/images/done.svg'
import Card from '../../../components/Card'
const Profile = () => {

  return (
    <section className='container  h-100 ' style={{ overflowY: 'hidden' }}>
      <motion.div
        variants={downToUp}
        initial='hidden'
        animate='visible'
        className='row h-100 d-flex justify-content-center align-items-center'
      >
        <Card
          outerClassName='col-lg-5 col-12 d-flex justify-content-center align-items-center'
          className='d-flex justify-content-center align-items-center'
        >
          <div className='align-items-center d-flex justify-content-center mt-5'>

          <Image src={done} alt='done'  />
          </div>
          <div className={`text-center m-2 mt-4 ${classes.title}`}>Congratulations</div>
          <div className={`text-center  ${classes.text}`}>your password have been changed</div>
          <div className={`text-center mb-5 ${classes.text}`}>succesfully</div>
        </Card>
      </motion.div>
    </section>
  )
}

export default Profile
