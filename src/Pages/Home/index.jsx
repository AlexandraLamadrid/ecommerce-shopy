import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout' 
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'


function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

    return (
        <Layout>
          Home
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg'>
            {
              items?.map(item => (
                <Card key={item.id} data={item} />
              ))
            }
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
  export default Home