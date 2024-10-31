import React, { useEffect, useState } from "react";
import { IPage } from "../../types";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../../axiosAPI.ts";
import EditForm from "../../components/EditForm/EditForm.tsx";

const initialState: IPage = {
    title: '',
    content: '',
};

const Admin = () => {
    const [form, setForm] = useState<IPage>(initialState);
    const [pages, setPages] = useState<string[]>([]);
    const [chosenPage, setChosenPage] = useState<string>('');
    const navigate = useNavigate();

    const fetchTheListOfPagesForMyApp = async () => {
        try {
            const response = await axiosApi.get('/pages');
            if (response.data) {
                console.log("Fetched pages:", response.data);
                setPages(Object.keys(response.data));
            }
        } catch (error) {
            console.error("Error fetching pages:", error);
        }
    };

    const fetchPageContent = async (pageId: string) => {
        try {
            const response = await axiosApi.get(`/pages/${pageId}.json`);
            if (response.data) {
                console.log("Fetched page content:", response.data);
                setForm(response.data);
            }
        } catch (error) {
            console.error("Error fetching page content:", error);
        }
    };

    useEffect(() => {
        void fetchTheListOfPagesForMyApp();
    }, []);

    useEffect(() => {
        if (chosenPage) {
            console.log("Chosen page:", chosenPage);
            void fetchPageContent(chosenPage);
        }
    }, [chosenPage]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chosenPage) {
            try {
                await axiosApi.put(`/pages/${chosenPage}`, form);
                navigate(`/pages/${chosenPage}`);
            } catch (error) {
                console.error("Error updating page:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="page" className="form-label">
                    Select Page
                </label>
                <select
                    id="page"
                    value={chosenPage}
                    onChange={(e) => setChosenPage(e.target.value)}
                    className="form-select"
                >
                    <option value="">Select a page</option>
                    {pages.map(page => (
                        <option key={page} value={page}>{page}</option>
                    ))}
                </select>
            </div>
            {chosenPage && form.title && (
                <EditForm
                    form={form}
                    onInputChange={onInputChange}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    );
};

export default Admin;
