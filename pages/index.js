import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Steve Dsouza</title>
				<meta name='description' content='Steve Dsouza Web Portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Hero />
		</div>
	)
}

