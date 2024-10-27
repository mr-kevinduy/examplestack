// import apiService from '@/services/apiService'
// import currencyPriceDataJson from '@/data/currency_price_response.json'

const currencyPriceDataJson = [];

export const useDashboard = () => {
  const loadChart = async ({ setErrors, ...props }) => {
    setErrors([])

    return new Promise(function(resolve, reject) {
      resolve(currencyPriceDataJson);
    });
  }

  return {
    loadChart,
  }
}
