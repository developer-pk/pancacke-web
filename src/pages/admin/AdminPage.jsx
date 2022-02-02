import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import toBase64 from '../../helpers/toBase64';
import WalletBar from '../../components/WalletBar/WalletBar';
import config from '../../config';
import dataURItoBlob from '../../helpers/dataURItoBlob';
import { useRef } from 'react';

export const AdminPage = () => {
  const profile = useSelector((state) => state.Profile);

  const [inProgress, setInProgress] = useState(false);
  const [file, setFile] = useState(undefined);
  const [position, setPosition] = useState(undefined);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [url, setUrl] = useState('');

  const formRef = useRef(null);

  const changeBanner = async (e) => {
    e.preventDefault();
    setInProgress(true);
    console.log(file, position);
    let err = {};

    if (!file || file.length === 0) {
      err['file'] = 'File is required';
    }

    if (!position) {
      err['position'] = 'Position is required';
    }

    if (!url) {
      err['url'] = 'URL is required';
    }

    setErrors(err);

    if (Object.keys(err).length === 0) {
      try {
        const fileBlob = await toBase64(file[0]);

        const data = new FormData();

        data.append('file', dataURItoBlob(fileBlob));

        const res = await fetch(config.API_URL + `/adverts?position=${position}&url=${url}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${profile.authToken}`,
          },
          body: data,
        }).then((res) => res.json());

        if (res.success) {
          formRef.current.reset();
          setUrl('');
          setMessage({ type: 'success', message: 'The banner has been changed.' });
        } else {
          setMessage({ type: 'danger', message: res.errors.message });
        }
      } catch (error) {
        setMessage({ type: 'danger', message: error?.errors?.message });
      }
    }

    setInProgress(false);
  };

  return (
    <div>
      <WalletBar />

      {profile.loggedIn && (
        <>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Change banner</h5>
                  {message && (
                    <div
                      className={`alert alert-${message.type} alert-dismissible fade show`}
                      role="alert"
                    >
                      {message.message}
                      <button
                        type="button"
                        onClick={(e) => {
                          setMessage(null);
                        }}
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}
                  <form onSubmit={changeBanner} ref={formRef}>
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Banner file image
                      </label>
                      <input
                        className={clsx(['form-control', { 'is-invalid': errors['file'] }])}
                        type="file"
                        id="formFile"
                        onChange={(e) => {
                          setFile(e.target.files);
                        }}
                      />
                      {errors['file'] && <div className="invalid-feedback">{errors['file']}</div>}
                    </div>
                    <select
                      className={clsx(['form-select', { 'is-invalid': errors['position'] }])}
                      aria-label="Position"
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      <option selected disabled>
                        Position
                      </option>
                      <option value="TOP">Top</option>
                      <option value="LEFT">Left</option>
                      <option value="RIGHT">Right</option>
                    </select>
                    <div className="mb-3 mt-2">
                      <label htmlFor="banner-url" className="form-label">
                        Banner url
                      </label>
                      <input
                        className={clsx(['form-control', { 'is-invalid': errors['url'] }])}
                        type="text"
                        id="banner-url"
                        placeholder="https://..."
                        value={url}
                        onChange={(e) => {
                          setUrl(e.target.value);
                        }}
                      />
                      {errors['url'] && <div className="invalid-feedback">{errors['url']}</div>}
                    </div>
                    {errors['position'] && (
                      <div className="invalid-feedback">{errors['position']}</div>
                    )}
                    <div className="mt-3 text-right">
                      <button className="btn btn-primary" disabled={inProgress}>
                        Send file
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
