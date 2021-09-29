import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setHeader(currentContact.header);
    setNotes(currentContact.notes);
    setCategory(currentContact.category);

  }, [currentContact]);

  const [name, setName] = useState("");
  const [header, setHeader] = useState("");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!header || !name || !notes || !category) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: currentContact.id,
      header,
      name,
      notes,
      category,
    };

    updateContact(data);
    toast.success("Notes updated successfully!!");
    history.push("/");

    localStorage.setItem("data", JSON.stringify(data))
    localStorage.getItem('data');
    // localStorage.setItem("name", JSON.stringify(name));
    // localStorage.setItem("header", JSON.stringify(header))
    // localStorage.setItem("notes", JSON.stringify(notes))
    // localStorage.setItem("category", JSON.stringify(category))
    
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
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
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Update Notes"
              />
            </div>
          </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_NOTE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
