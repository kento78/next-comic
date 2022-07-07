import React, { FC } from "react";
import type { GetServerSidePropsContext } from "next";
import searchApi from "../services/search";
import { ComicType } from "../models/comics";
import { IsBrowser } from "../components/IsBrowser";
import Meta from "../components/Meta";
import MainLayout from "../components/Layout/MainLayout";
import Title from "../components/Title";
import GridLayout from "../components/Layout/GridLayout";
import ComicsItem from "../components/Comics/ComicsItem";
import PaginationCustomer from "../components/Pagination";

interface SearchProps {
  data: {
    data: ComicType[];
    totalPage: number;
  };
  keyword: string;
}

const Search: FC<SearchProps> = ({ data, keyword }) => {
  return (
    <IsBrowser>
      <Meta />
      <MainLayout>
        <div className="pt-4">
          <Title>Kết quả cho: {keyword}</Title>

          <div className="mt-4">
            <GridLayout>
              {data?.data?.map((item) => (
                <ComicsItem key={item.href} item={item} />
              ))}
            </GridLayout>
          </div>

          <PaginationCustomer totalPage={data.totalPage} />
        </div>
      </MainLayout>
    </IsBrowser>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const keyword = query.keyword as string;
  const page = query.page || 1;

  try {
    const data = await searchApi.getSearchKeyWord(keyword, Number(page));

    return {
      props: { data: data, keyword },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Search;