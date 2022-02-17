import React, { useState } from 'react';
import {createToken} from '../../../actions/admin/upload_token/TokenActions'
import { connect } from 'react-redux';
import history from '../../../history.js'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Fab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ToastContainer, toast } from 'material-react-toastify';
import './Token.css';

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))
const AddForm = ({ dispatch }) => {
    const [selectedFile, setFile] = useState('')
    const [state, setState] = useState({
        date: new Date(),
    })
    const [status, setStatus] = React.useState('');
    const [content, setContent] = useState(
        ``
    )
    const classes = useStyles()


    const handleSubmit = (event) => {

          //console.log(selectedFile[0].base64,'form data');
          // Create an object of formData
                const formData = new FormData();
                
                formData.append(
                    "contractAddress",
                    state.token_address
                );
                formData.append(
                    "symbol",
                    state.token_symbol
                );
                formData.append(
                    "tokenName",
                    state.token_name
                );
                formData.append(
                    "status",
                    state.Status
                );
                formData.append(
                    "image",
                    selectedFile,
                    selectedFile.name
                );

                console.log(formData.values(),'printdata');
            const params = {contractAddress:state.token_address,tokens:formData,status:state.Status};
            dispatch(createToken(formData));
           toast.success("Token added successfully.");
            history.push('/tokens')

      
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
        setStatus(event.target.value)
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const onFileChange = (event) => {

        setFile(event.target.files[0]);
    }

    const getFiles =  (files) => {
        setFile(files);
      }

    const {
        token_address,
        token_name,
        token_symbol,
        image,
        Status,
    } = state

  return (

    <div id="content-page" className="content-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
              <div className="iq-card">
        <div className="iq-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="card-title">Add Tokens</h4>
          </div>
        </div>
        <div className="iq-card-body">
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextValidator
                        variant="outlined"
                            className="mb-4 w-full"
                            label="Token Name"
                            onChange={handleChange}
                            type="text"
                            name="token_name"
                            value={token_name || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                        variant="outlined"
                            className="mb-4 w-full"
                            label="Token Symbol"
                            onChange={handleChange}
                            type="text"
                            name="token_symbol"
                            value={token_symbol || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                        variant="outlined"
                            className="mb-4 w-full"
                            label="Token Address"
                            onChange={handleChange}
                            type="text"
                            name="token_address"
                            value={token_address || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <div className="mb-3">
                            <input type="file" name="image" onChange={onFileChange} />

                            {/* <FileBase64
                            multiple={ true }
                            onDone={ getFiles.bind(this) } /> */}
                        </div>
                        <FormControl variant="outlined" className={classes.formControl+" mb-4 w-full"}>
                         <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={status}
                            onChange={handleChange}
                            label="Status"
                            name="Status"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                   
                    <span className="capitalize">Save</span>
                </Button>
            </ValidatorForm>
        </div>
      </div>
            </div>
          </div>
        </div> 
      </div>
   
  );
};

export default connect()(AddForm);
