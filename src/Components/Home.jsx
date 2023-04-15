import React from 'react'
import SignUP from './SignUP'
import { Stack } from '@mui/system'
import Slider from './Slider'

const Home = () => {
		return (
			<Stack  direction="row" spacing={2}>
			<Slider/>
			<SignUP/> 
			</Stack>
		)
}

export default Home
