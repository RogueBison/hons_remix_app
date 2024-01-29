import { Outlet, LiveReload, Links, Link, Scripts } from "@remix-run/react";
import React from "react";

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type iDocType = {
  children: React.ReactNode;
  title?: string;
};

export function ErrorBoundry({ error }: any) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Sorry An Error Occured</h1>
        <pre>{error}</pre>
      </Layout>
    </Document>
  );
}

function Document({ children, title }: iDocType) {
  return (
    <html lang="en">
      <head>
        <Links />
        <title>{title ? title : "MA Hons Remix"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
      <Scripts />
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <div>
            <aside>
              <ul>
                <li><Link to="/movies">Films</Link></li>
              </ul>
            </aside>
            <main>
              {children}
            </main>
          </div>
        </div>
    </>
  );
}
