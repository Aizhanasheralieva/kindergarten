import { useParams } from "react-router-dom";
import { IPage } from "../../types";
import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../../axiosAPI.ts";

const SummaryPage = () => {
  const { id } = useParams<{id: string}>();
  console.log(id);


  const [pageContent, setPageContent] = useState<IPage>({
    title: "",
    content: "",
  });


  const fetchDataAboutOnePage = useCallback(async () => {
    try {
      const response = await axiosApi.get(`/pages/${id}.json`);
      if (response.data) {
        setPageContent(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log("Fetching page with ID:", id);



  useEffect(() => {
    if (id) {
      void fetchDataAboutOnePage();
    }
  }, [fetchDataAboutOnePage, id]);

  return (
    <div className="container mt-4">
      <h1>{pageContent.title}</h1>
      <p>{pageContent.content}</p>
    </div>
  );
};

export default SummaryPage;
