import React, { useState } from 'react';
import {createAds} from '../../../actions/admin/ads/AdsActions'
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
const AdsForm = ({ dispatch }) => {
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
                
                // Update the formData object
                formData.append(
                    "title",
                    state.title
                );
                formData.append(
                    "status",
                    state.Status
                );
                formData.append(
                    "ads",
                    selectedFile,
                    selectedFile.name
                );
            const params = {title:state.title,ads:formData,status:state.Status};
            dispatch(createAds(formData));
         //   toast.success("Ads added successfully.");
            history.push('/ads/list')

      
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
        title,
        ads,
        Status,
        file,
    } = state


  return (
      <div className="col-md-12">
         
          <div className="iq-card">
        <div className="iq-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="card-title">Input</h4>
          </div>
        </div>
        <div className="iq-card-body">
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                        variant="outlined"
                            className="mb-4 w-full"
                            label="Ads Link"
                            onChange={handleChange}
                            type="text"
                            name="title"
                            value={title || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <div className="mb-3">
                            <input type="file" name="file" onChange={onFileChange} />

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
   
  );
};

export default connect()(AdsForm);
