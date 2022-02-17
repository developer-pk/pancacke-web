import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getAds, deleteAds} from '../../../actions/admin/ads/AdsActions'
import { useSelector } from 'react-redux'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ToastContainer } from 'material-react-toastify';
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
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../../constants/utility"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const AdsTable = ({ dispatch }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)
  const [industries, setIndustries] = useState([]);
  const {ads} = useSelector(state=>state);
  const [open,setState] = React.useState(false)
  const [industryId,setIndustry] = React.useState()

 useEffect(() => {
         const params={type:'GET_ADS'};
         dispatch(getAds(params));

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
 
   const  handleClickOpen = (id) => {
     setState(true);
     setIndustry(id);
   };
 
   const  handleClose = () => {
     setState(false);
   };
 
   const handleAgree = () => {
     console.log("I agree!",industryId);
     dispatch(deleteAds(industryId));
     handleClose();
     const params={type:'GET_ADS'};
     dispatch(getAds(params));
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
            <h4 className="card-title">Ads</h4>
          </div>
        </div>
        <div className="iq-card-body">
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              <a href="/add-ads" className="btn btn-sm iq-bg-success"><i className="ri-add-fill"><span className="pl-1">Add Ads</span></i>
              </a>
            </span>
            <ToastContainer position="top-right"
                                autoClose={3000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover />
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0 add_title">Title</TableCell>
                        <TableCell className="px-0">Ads</TableCell>
                        <TableCell className="px-0">Status</TableCell>
                        <TableCell className="px-0">Created Date</TableCell>
                        <TableCell className="px-0">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ads.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((indus, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    className="px-0 capitalize add_td"
                                    align="left"
                                >
                                    {indus.title}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {(indus.ads) ? <img src={SERVICE_URL+"/uploads/"+indus.ads} /> : ''}
                                    
                                </TableCell>
                                <TableCell className="px-0 capitalize">
                                    {indus.status}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {indus.createdAt}
                                </TableCell>
                                <TableCell className="px-0">
                                    {/* <Link to="/industry/edit">
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                    </Link> */}
                                    <IconButton onClick={() => handleClickOpen(indus.id)}>
                                    <FontAwesomeIcon icon={['fas', 'close']} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            <TablePagination
                className="px-4"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={ads.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete it?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDisagree} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAgree} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div> 
      </div>
   
  );
};

export default connect()(AdsTable);
