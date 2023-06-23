import "@/styles/globals.css"
import Layout from "../../components/Layout"
import { AuthProvider } from "../../ctx/authContext"
import { CartProvider } from "../../ctx/cartContext"

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </CartProvider>
  )
}
