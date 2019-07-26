import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>

          <footer className="bg-blue-700">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://cjadkins.com"
                  className="font-bold no-underline text-white"
                >
                  Christopher J. Adkins
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/Softyy/single-page-form-gatsby/"
                  className="font-bold no-underline text-white"
                >
                  GitHub
                </a>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
