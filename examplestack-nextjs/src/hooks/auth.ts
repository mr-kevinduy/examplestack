import apiService from '@/services/apiService'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const csrf = () => apiService.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }) => {
    await csrf()

    setErrors([])

    apiService
      .post('/register', props)
      // .then(() => mutate())
      .catch(error => {
          if (error.response.status !== 422) throw error

          setErrors(error.response.data.errors)
      })
  }

  const login = async () => {
    console.log('login')
  }

  const logout = async () => {
    console.log('logout')
  }

  return {
    register,
    login,
    logout,
  }
}
