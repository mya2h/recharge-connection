import { useEffect } from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import axios from "axios"

function App() {
  var url = "https://www.admin.rechargeapps.com/oauth/token"
  const data = {
    code: "0xDEADBEEF",
    grant_type: "authorization_code",
    redirect_uri: "https://your_domain.com",
    client_id: "32a0cd0eb1459e24bc104cb0a6d4b70421f21750f36d3ab6e7b550dbd10957e4"
  }
  const body = JSON.stringify(data)

  const reachRecharge = async () => {
    let res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    console.log("what will be logged", res)
  }
  useEffect(() => {
    reachRecharge()
  }, [])
  return (
    <div>
      Welcome
    </div>
  );
}

export default App;
