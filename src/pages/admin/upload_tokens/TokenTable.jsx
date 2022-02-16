import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Icon,
} from '@material-ui/core'
import { connect } from 'react-redux';
import {getToken, deleteToken} from '../../../actions/admin/upload_token/TokenActions'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../../constants/utility"

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))
const TokenTable = ({ dispatch }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
     const [page, setPage] = React.useState(0)
     const [industries, setIndustries] = useState([]);
     const {tokenImage} = useSelector(state=>state);
     const [open,setState] = React.useState(false)
     const [industryId,setIndustry] = React.useState()

    useEffect(() => {
            const params={type:'GET_TOKEN'};
            dispatch(getToken(params));

        }, []);
       // console.log(promotedtokens,'data for me');
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
        dispatch(deleteToken(industryId));
        handleClose();
        const params={type:'GET_TOKEN'};
        dispatch(getToken(params));
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
            <h4 className="card-title">Tokens</h4>
          </div>
        </div>
        <div className="iq-card-body">
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              <a href="/add-token" className="btn btn-sm iq-bg-success"><i className="ri-add-fill"><span className="pl-1">Add Token</span></i>
              </a>
            </span>
            <table class="table table-hover">
                              <thead>
                                 <tr>
                                    <th scope="col">Token Name</th>
                                    <th scope="col">Token Symbol</th>
                                    <th scope="col">Contract Address</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {tokenImage.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((indus, index) => (
                                 <tr>
                                   <th scope="row">{indus.tokenName}</th>
                                   <th scope="row">{indus.symbol}</th>
                                    <th scope="row">{indus.contractAddress}</th>
                                    <td> {(indus.image) ? <img src={SERVICE_URL+"/uploads/tokenImages/"+indus.image} /> : ''}</td>
                                    <td>{indus.createdAt}</td>
                                    <td><IconButton onClick={() => handleClickOpen(indus.id)}>
                                        <Icon color="error">close</Icon>
                                    </IconButton></td>
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

export default connect()(TokenTable);
