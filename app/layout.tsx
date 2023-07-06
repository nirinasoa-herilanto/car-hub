import { Poppins } from 'next/font/google';
import { StyledComponentsRegistry } from '@project/lib';
import { GlobalStyle } from '@project/styles';

import { Footer, Header } from '@project/components';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Car Hub | Nhr',
  description: `Discover the best cars in the world.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <main className="main fit">{children}</main>
          <div id="modal-root"></div>
          <div id="overlay-root"></div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
