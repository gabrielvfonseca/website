import type { AppProps } from 'next/app';

import '../styles/globals.css';

import Sidebar from '../components/ui/Sidebar';

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full">
        <div className="h-full w-4/5 p-8 fixed bottom-0 top-5 right-5 box-border border-0.8 border-solid border-charleston border-opacity-30 rounded-t-lg">
          <div className="static mt-10 mx-20 max-w-3xl overflow-y-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
