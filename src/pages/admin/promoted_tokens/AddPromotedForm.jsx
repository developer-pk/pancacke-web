import React, { useState, useEffect } from 'react';
import {createPromotedToken} from '../../../actions/admin/promoted_token/PromotedTokenActions'
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
import './Token.css';
import { ToastContainer } from 'material-react-toastify';

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
const AddPromotedForm = ({ dispatch }) => {
    const [selectedFile, setFile] = useState('')
    const [state, setState] = useState({
        date: new Date(),
    })
    const [status, setStatus] = React.useState('');
    const [content, setContent] = useState(
        ``
    )
    const classes = useStyles()
    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {

          //console.log(selectedFile[0].base64,'form data');
          // Create an object of formData
                const formData = new FormData();
                
                formData.append(
                    "contractAddress",
                    state.contract_address
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
                // formData.append(
                //     "image",
                //     selectedFile.name
                // );
                // Display the values
for (var value of formData.values()) {
    console.log(value);
 }
                console.log(formData.values(),'printdata');
            const params = {contractAddress:state.contract_address,tokens:formData,status:state.Status};
            dispatch(createPromotedToken(formData));
         //   toast.success("Ads added successfully.");
            history.push('/promoted-tokens')

      
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
        contract_address,
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
            <h4 className="card-title">Add Promoted Token</h4>
          </div>
        </div>
        <div className="iq-card-body">
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <ToastContainer position="top-right"
                                autoClose={3000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover />
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                        variant="outlined"
                            className="mb-4 w-full"
                            label="Contract Address"
                            onChange={handleChange}
                            type="text"
                            name="contract_address"
                            value={contract_address || ''}
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
                   
                    <span className="pl-2 capitalize">Save</span>
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

export default connect()(AddPromotedForm);
