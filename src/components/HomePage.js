import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Main.css";

const Home = ({ notes, deleteContact }) => {

  const [serachTerm, setSerachTerm] = useState("");
  
  const remove = () =>{
    localStorage.removeItem('data')
    }

  return (
    <div className="container">
    
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Notes
        </Link>

        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search for Header Name or Category" onChange={(event)=>{setSerachTerm(event.target.value)}}/>
        </div>
        
        {notes.length > 0 ? (
                notes.filter((val)=>{
                  if(serachTerm==""){
                    return val
                  } else if(val.header.toLowerCase().includes(serachTerm.toLowerCase())){
                    return val
                  } else if(val.category.toLowerCase().includes(serachTerm.toLowerCase())){
                    return val
                  }
                })
                .map((note, id) => (
                  <div class="card-">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{note.name} - <i>{note.header}</i></h5>
                        <h6 class="card-title">Category:- {note.category}</h6>
                          <p class="card-text">{note.notes}</p>
                          <Link to={`/edit/${note.id}`} className="btn btn-lg btn-primary btn-block mr-5">Edit</Link>
                          <button type="button" id="remove" onClick={() => {remove(); deleteContact(note.id)}}  className="btn btn-lg btn-danger btn-block">Delete</button>
                      </div>
                    </div>
                  </div> 
          /* <div class="container">
          <div class="row">
          <div class="col-3">
          <div class="card-deck">
          <div class="card">
          <div class="card-body">
          <h5 class="card-title">{note.name} - <i>{note.header}</i></h5>
          <h6 class="card-title">Category:- {note.category}</h6>
          <p class="card-text">{note.notes}</p>
          </div>
          </div>
          <div class="w-100 py-2"></div>
          </div></div></div></div>
          <div class="card-columns">
          <div class="card">
          <h5 class="">{note.name} - <i>{note.header}</i></h5>
          <h6 class="">Category:- {note.category}</h6>
          <p class="">{note.notes}</p>
          </div></div> */
          ))) : (
                <div>
                  <h3>No Notes for Now..!!</h3>
                </div>
              )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
