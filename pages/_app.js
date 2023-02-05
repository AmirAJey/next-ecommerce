import StoreProvider from 'utils/store';
import { Footer, Header } from 'components';
import {useLayout} from 'hooks';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  const layout = useLayout(
    {
      header: <Header />,
      footer: <Footer />,
    },
    Component.customLayout
  );
  return (
    <StoreProvider>
      {layout.header}
      <Component {...pageProps} />
      {layout.footer}
    </StoreProvider>
  );
}
