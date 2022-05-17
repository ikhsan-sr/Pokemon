import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PageLoader from "./components/commons/Loader/PageLoader";
import Layout from "./components/commons/layout/Layout";

const Home = lazy(() => import("./pages/Home/index"));
const Detail = lazy(() => import("./pages/Detail/Detail"));
const Pokebag = lazy(() => import("./pages/Pokebag/index"));

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<Detail />} />
              <Route path="/pokebag" element={<Pokebag />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ApolloProvider>
    </Layout>
  )
}

