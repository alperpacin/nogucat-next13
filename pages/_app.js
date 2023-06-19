import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {getLayout(<Component {...pageProps} />)}
    </SessionContextProvider>
  );
};

export default App;
