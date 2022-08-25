import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Login from './login'
import Welcome from './welcome'

export default function Home() {
  return (
		<>
			<Login />
		</>
		// <Welcome />
  );
}
