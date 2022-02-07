import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getContactUs, deleteContactUs} from '../../../actions/frontend/ContactUsActions'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))

const ContactTable = ({ dispatch }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)
  const {contactus} = useSelector(state=>state);
  const [open,setState] = React.useState(false)
  const [industryId,setIndustry] = React.useState()

 useEffect(() => {
         const params={type:'GET_CONTACT_US'};
         dispatch(getContactUs(params));

     }, []);
 const classes = useStyles()

 const handleChangePage = (event, newPage) => {
     setPage(newPage)
 }

 const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(+event.target.value)
     setPage(0)
 }

 const  handleClickOpen = (id) => {
     setState(true);
     setIndustry(id);
   };
 
   const  handleClose = () => {
     setState(false);
   };
 
   const handleAgree = () => {
     console.log("I agree!",industryId);
     dispatch(deleteContactUs(industryId));
     handleClose();
     const params={type:'GET_CONTACT_US'};
     dispatch(getContactUs(params));
   };
   const handleDisagree = () => {
     console.log("I do not agree.");
     handleClose();
   };

  return (
    <div id="content-page" className="content-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
              <div className="iq-card">
        <div className="iq-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="card-title">Contact Us</h4>
          </div>
        </div>
        <div className="iq-card-body">
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              {/* <a href="/add-ads" className="btn btn-sm iq-bg-success"><i className="ri-add-fill"><span className="pl-1">Add Ads</span></i>
              </a> */}
            </span>

            <table class="table table-hover">
                              <thead>
                                 <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {contactus.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((contact, index) => (
                                 <tr>
                                    <th scope="row">{contact.name}</th>
                                    <td>{contact.email}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.message}</td>
                                    <td>{contact.createdAt}</td>
                                    <td>
                                    <Link to="/industry/edit">
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                    </Link> 
                                    <IconButton onClick={() => handleClickOpen(contact.id)}>
                                        <Icon color="error">close</Icon>
                                    </IconButton>
                                    </td>
                                 </tr>
                                  ))}
                              </tbody>
                           </table> 
          </div>
        </div>
      </div>
            </div>
          </div>
        </div> 
      </div>
   
  );
};

export default connect()(ContactTable);
