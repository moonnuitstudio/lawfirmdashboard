import { styled } from '@mui/material/styles'
import { useEffect } from 'react'

import { Container } from '@mui/material'

import "../assets/css/spin.css"

import useLoadscreen from '../hooks/useLoadScreen'

const Section = styled(Container)(({theme})=>({
    position: 'absolute',
    width: '100vw',
    maxWidth: '100vw !important',
    height: '100vh',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,.15)',
    zIndex: 10000,
    padding: 'none !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Loadscreen = () => {

    const { isLoadscreenVisible } = useLoadscreen()

    useEffect(() => {

    }, [isLoadscreenVisible])

  return (
    <>
        {
            isLoadscreenVisible && (
                <Section>
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </Section>
            )
        }
    </>
  )
}

export default Loadscreen