import React from "react";
import {IPage} from "../../types";

interface Props {
    form: IPage;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}
const EditForm: React.FC<Props> = ({form, onInputChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="w-50 mx-auto">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={onInputChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={form.content}
                    onChange={onInputChange}
                    className="form-control"
                    rows={5}
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default EditForm;