import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ShippingAddress = () => {
    
    const navigate = useNavigate()

  const { user } = useSelector((state) => state.user)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

  }, [user, navigate])

  return (
    <div>ShippingAddress</div>
  )
}
 