"use client";
import { Suspense } from "react";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";
import LoadingState from "../components/LoadingState";
import SearchResult from "../components/Search/SearchResult";

const SearchPage = () => {
  return (
    <ResponsiveLayout>
      <Suspense fallback={<LoadingState />}>
        <SearchResult />
      </Suspense>
    </ResponsiveLayout>
  );
};

export default SearchPage;
