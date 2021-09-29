import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ adnte, addNotes }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [header, setHeader] = useState("");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!header || !name || !notes || !category) {
      return toast.warning("Please fill in all fields!!");
    }
    
    const data = {
      id: adnte.length > 0 ? adnte[adnte.length - 1].id + 1 : 0,
      header,
      name,
      notes,
      category,
    };

    addNotes(data);
    toast.success("Notes added successfully!!");
    history.push("/");

    localStorage.setItem("data", JSON.stringify(data))
    localStorage.getItem('data');
    // localStorage.setItem("name", JSON.stringify(name));
    // localStorage.setItem("header", JSON.stringify(header))
    // localStorage.setItem("notes", JSON.stringify(notes))
    // localStorage.setItem("category", JSON.stringify(category))

  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Notes</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select 
                className="form-control"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                  <option> Select Category </option>
                  <option>Mobile</option>
                  <option>Laptop</option>
                  <option>Desktop</option>
                  <option>Tablet</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                type="text"
                placeholder="Enter Notes.."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Notes"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  adnte: state,
});
const mapDispatchToProps = (dispatch) => ({
  addNotes: (data) => {
    dispatch({ type: "ADD_NOTE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
