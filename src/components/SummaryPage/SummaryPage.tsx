import {useParams} from "react-router-dom";
import {IPage} from "../../types";
import {useCallback, useEffect, useState} from "react";
import axiosAPI from "../../../axiosAPI.ts";


const SummaryPage = () => {
    const { pageTitle} = useParams<{ pageTitle: string }>();
    const [pageContent, setPageContent] = useState<IPage>({
        title: '',
        content: '',
    });

        const fetchDataAboutPage = useCallback(async () => {
            try {
                const response =  await axiosAPI(`${pageTitle}/about`);
                if (response.data) {
                    setPageContent(response.data);
                }
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }, [pageTitle]);

    useEffect(() => {
        if (pageTitle) {
          void fetchDataAboutPage();
        }
    }, [fetchDataAboutPage, pageTitle]);


    return (
        <div className="container mt-4">
            <h1>{pageContent.title}</h1>
            <p>{pageContent.content}</p>
        </div>
    );
};

export default SummaryPage;