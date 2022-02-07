import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getAlert} from '../../../actions/common/AlertActions'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))

const AlertTable = ({ dispatch }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)
  const [industries, setIndustries] = useState([]);
  const {alert} = useSelector(state=>state);
  const [open,setState] = React.useState(false)
  const [industryId,setIndustry] = React.useState()

 useEffect(() => {
         const params={type:'GET_ALERT'};
         dispatch(getAlert(params));

     }, []);
 const classes = useStyles()

 const handleChangePage = (event, newPage) => {
     setPage(newPage)
 }

 const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(+event.target.value)
     setPage(0)
 }

 // const handleDelete = indus => {
 //     confirm({ description: `This will permanently delete ${indus.name}.` })
 //       .then(() => dispatch(deleteIndustry(indus.id)))
 //       .catch(() => console.log("Deletion cancelled."));
 //   };
 
   const  handleClose = () => {
     setState(false);
   };

  return (
    <div id="content-page" className="content-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
              <div className="iq-card">
        <div className="iq-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="card-title">Alerts</h4>
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
                                    <th scope="col">High Price</th>
                                    <th scope="col">Low Price</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">IP</th>
                                    <th scope="col">Status</th>
                                 </tr>
                              </thead>
                              <tbody>
                               {alert.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((indus, index) => (
                                 <tr>
                                    <th scope="row">{indus.highPrice}</th>
                                    <td>{indus.lowPrice}</td>
                                    <td>{indus.currencySymbol}</td>
                                    <td>{indus.ip}</td>
                                    <td>{indus.status}</td>
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

export default connect()(AlertTable);
