import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Icon,
} from '@material-ui/core'
import { connect } from 'react-redux';
import {getPromotedToken, deletePromotedToken} from '../../../actions/admin/promoted_token/PromotedTokenActions'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
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
const PromotedTokenTable = ({ dispatch }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
     const [page, setPage] = React.useState(0)
     const [industries, setIndustries] = useState([]);
     const {promotedtokens} = useSelector(state=>state);
     const [open,setState] = React.useState(false)
     const [industryId,setIndustry] = React.useState()

    useEffect(() => {
            const params={type:'GET_PROMOTEDTOKEN'};
            dispatch(getPromotedToken(params));

        }, []);
        console.log(promotedtokens,'data for me');
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
        dispatch(deletePromotedToken(industryId));
        handleClose();
        const params={type:'GET_PROMOTEDTOKEN'};
        dispatch(getPromotedToken(params));
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
            <h4 className="card-title">Promoted Tokens</h4>
          </div>
        </div>
        <div className="iq-card-body">
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              <a href="/promoted-token/add" className="btn btn-sm iq-bg-success"><i className="ri-add-fill"><span className="pl-1">Add Promoted Token</span></i>
              </a>
            </span>
            <table class="table table-hover">
                              <thead>
                                 <tr>
                                    <th scope="col">Contract Address</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {promotedtokens.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((indus, index) => (
                                 <tr>
                                    <td scope="row">{indus.contractAddress}</td>
                                    <td> {(indus.image) ? <img src={SERVICE_URL+"/uploads/tokens/"+indus.image}/> : ''}</td>
                                    <td>{indus.createdAt}</td>
                                    <td><IconButton onClick={() => handleClickOpen(indus.id)}>
                                        <FontAwesomeIcon icon={['fas', 'close']} />
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

export default connect()(PromotedTokenTable);
