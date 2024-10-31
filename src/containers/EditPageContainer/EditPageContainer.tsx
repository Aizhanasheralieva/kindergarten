import React, { useEffect, useState } from "react";
import { IPage } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import Admin from "../../containers/Admin/Admin.tsx";
import axiosApi from "../../../axiosAPI.ts";

const EditPageContainer = () => {
    const { pageId } = useParams<{ pageId: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<IPage>({
        title: '',
        content: '',
    });

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const response = await axiosApi.get(`/pages/${pageId}.json`);
                if (response.data) {
                    setFormData(response.data);
                }
            } catch (error) {
                console.error("Error fetching page content:", error);
            }
        };

        if (pageId) {
            void fetchPageContent();
        }
    }, [pageId]);

    const handleFormChange = (newForm: IPage) => {
        setFormData(newForm);
    };

    const handleSave = async () => {
        try {
            await axiosApi.put(`/pages/${pageId}`, formData);
            navigate(`/pages/${pageId}`);
        } catch (error) {
            console.error("Error saving page:", error);
        }
    };

    return (
        <Admin
            form={formData}
            onFormChange={handleFormChange}
            onSave={handleSave}
        />
    );
};

export default EditPageContainer;
