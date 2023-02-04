import { data } from '@/utils/data';
import { Page, Product } from 'components';

function Home() {
  return (
    <Page>
      <ul className="card-list">
        {data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </Page>
  );
}

export default Home;
