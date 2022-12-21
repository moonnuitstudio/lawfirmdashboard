import { useSearchParams, useNavigate } from "react-router-dom"

import { useState, useEffect } from "react";

import useToastify from "../hooks/useToastify";
import useDocketwise from "../hooks/useDocketwise";
import useLoadscreen from "../hooks/useLoadScreen";

const AuthorizePage = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate()
  
  const { showErrToast } = useToastify()
  const { saveAuthCode } = useDocketwise()
  const { hideLoadscreen } = useLoadscreen()

  useEffect(() => {
    const status_code = searchParams.get("status_code")
    const message = searchParams.get("message")
    const code = searchParams.get("code")

    if (!code) {
      showErrToast(message)
      console.error(`Err Code: ${status_code}`, message)
    } else { // Si hay authorization
      saveAuthCode(code)
    }

    hideLoadscreen()
    navigate("/")
  }, [])

  return (
    <div></div>
  )
}

export default AuthorizePage