import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TopNav from '../../components/TopNavBar/TopNav';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../css/common.css';
import { connect } from 'react-redux';
import { getAds } from '../../../actions/admin/ads/AdsActions';

const Dashboard = ({ dispatch }) => {
  

  return (
      <div className="DashboardPage">
        <div className="Row">
      <div className="col-md-12">
        <TopNav />
      </div>
      </div>
      <div className="Row">

      <div className="col-md-2">
        <Sidebar />
      </div>

      <div className="col-md-10">
         <div id="content-page" className="content-page">
         <div class="row">
            <div class="col-sm-4">
              {/* <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */}
            </div>
            <div class="col-sm-4">
              {/* <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */}
            </div>
            <div class="col-sm-4">
              {/* <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */}
            </div>
          </div>
         {/* <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="iq-card">
                  <div className="iq-card-body profile-page p-0">
                    <div className="profile-header">
                      <div className="cover-container">
                        <img
                          src="images/page-img/profile-bg1.jpg"
                          alt="profile-bg"
                          className="rounded img-fluid"
                        />
                        <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                          <li>
                            <a href="javascript:void();">
                              <i className="ri-pencil-line" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void();">
                              <i className="ri-settings-4-line" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="user-detail text-center mb-3">
                        <div className="profile-img">
                          <img
                            src="images/user/11.png"
                            alt="profile-img"
                            className="avatar-130 img-fluid"
                          />
                        </div>
                        <div className="profile-detail">
                          <h3 className>Bni Cyst</h3>
                        </div>
                      </div>
                      <div className="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                        <div className="social-links">
                          <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/08.png"
                                  className="img-fluid rounded"
                                  alt="facebook"
                                />
                              </a>
                            </li>
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/09.png"
                                  className="img-fluid rounded"
                                  alt="Twitter"
                                />
                              </a>
                            </li>
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/10.png"
                                  className="img-fluid rounded"
                                  alt="Instagram"
                                />
                              </a>
                            </li>
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/11.png"
                                  className="img-fluid rounded"
                                  alt="Google plus"
                                />
                              </a>
                            </li>
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/12.png"
                                  className="img-fluid rounded"
                                  alt="You tube"
                                />
                              </a>
                            </li>
                            <li className="text-center pr-3">
                              <a href="#">
                                <img
                                  src="images/icon/13.png"
                                  className="img-fluid rounded"
                                  alt="linkedin"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="social-info">
                          <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                            <li className="text-center pl-3">
                              <h6>Posts</h6>
                              <p className="mb-0">690</p>
                            </li>
                            <li className="text-center pl-3">
                              <h6>Followers</h6>
                              <p className="mb-0">206</p>
                            </li>
                            <li className="text-center pl-3">
                              <h6>Following</h6>
                              <p className="mb-0">100</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-body p-0">
                    <div className="user-tabing">
                      <ul className="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                        <li className="col-sm-3 p-0">
                          <a className="nav-link active" data-toggle="pill" href="#timeline">
                            Timeline
                          </a>
                        </li>
                        <li className="col-sm-3 p-0">
                          <a className="nav-link" data-toggle="pill" href="#about">
                            About
                          </a>
                        </li>
                        <li className="col-sm-3 p-0">
                          <a className="nav-link" data-toggle="pill" href="#friends">
                            friends
                          </a>
                        </li>
                        <li className="col-sm-3 p-0">
                          <a className="nav-link" data-toggle="pill" href="#photos">
                            Photos
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="timeline" role="tabpanel">
                    <div className="iq-card-body p-0">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="iq-card">
                            <div className="iq-card-body">
                              <a href="#">
                                <span className="badge badge-pill badge-primary font-weight-normal ml-auto mr-1">
                                  <i className="ri-star-line" />
                                </span>{' '}
                                27 Items for yoou
                              </a>
                            </div>
                          </div>
                          <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                <h4 className="card-title">Life Event</h4>
                              </div>
                              <div className="iq-card-header-toolbar d-flex align-items-center">
                                <p className="m-0">
                                  <a href="javacsript:void();"> Create </a>
                                </p>
                              </div>
                            </div>
                            <div className="iq-card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="event-post position-relative">
                                    <a href="javascript:void();">
                                      <img
                                        src="images/page-img/07.jpg"
                                        alt="gallary-image"
                                        className="img-fluid rounded"
                                      />
                                    </a>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle">
                                        <i className="ri-briefcase-line" />
                                      </div>
                                    </div>
                                    <div className="iq-card-body text-center p-2">
                                      <h5>Started New Job at Apple</h5>
                                      <p>January 24, 2019</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="event-post position-relative">
                                    <a href="javascript:void();">
                                      <img
                                        src="images/page-img/06.jpg"
                                        alt="gallary-image"
                                        className="img-fluid rounded"
                                      />
                                    </a>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle">
                                        <i className="ri-briefcase-line" />
                                      </div>
                                    </div>
                                    <div className="iq-card-body text-center p-2">
                                      <h5>Freelance Photographer</h5>
                                      <p>January 24, 2019</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                <h4 className="card-title">Photos</h4>
                              </div>
                              <div className="iq-card-header-toolbar d-flex align-items-center">
                                <p className="m-0">
                                  <a href="javacsript:void();">Add Photo </a>
                                </p>
                              </div>
                            </div>
                            <div className="iq-card-body">
                              <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g1.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g2.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g3.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g4.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g5.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g6.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g7.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g8.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/g9.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                <h4 className="card-title">Friends</h4>
                              </div>
                              <div className="iq-card-header-toolbar d-flex align-items-center">
                                <p className="m-0">
                                  <a href="javacsript:void();">Add New </a>
                                </p>
                              </div>
                            </div>
                            <div className="iq-card-body">
                              <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/05.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Anna Rexia</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/06.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Tara Zona</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/07.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Polly Tech</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/08.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Bill Emia</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/09.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Moe Fugga</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/10.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Hal Appeno </h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/07.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Zack Lee</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/06.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Terry Aki</h6>
                                </li>
                                <li className="col-md-4 col-6 pl-2 pr-0 pb-0">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/user/05.jpg"
                                      alt="gallary-image"
                                      className="img-fluid"
                                    />
                                  </a>
                                  <h6 className="mt-2">Greta Life</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div id="post-modal-data" className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                              <div className="iq-header-title">
                                <h4 className="card-title">Create Post</h4>
                              </div>
                            </div>
                            <div
                              className="iq-card-body"
                              data-toggle="modal"
                              data-target="#post-modal"
                            >
                              <div className="d-flex align-items-center">
                                <div className="user-img">
                                  <img
                                    src="images/user/1.jpg"
                                    alt="userimg"
                                    className="avatar-60 rounded-circle img-fluid"
                                  />
                                </div>
                                <form className="post-text ml-3 w-100" action="javascript:void();">
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Write something here..."
                                    style={{ border: 'none' }}
                                  />
                                </form>
                              </div>
                              <hr />
                              <ul className="post-opt-block d-flex align-items-center list-inline m-0 p-0">
                                <li className="iq-bg-primary rounded p-2 pointer mr-3">
                                  <a href="#" />
                                  <img
                                    src="images/small/07.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />{' '}
                                  Photo/Video
                                </li>
                                <li className="iq-bg-primary rounded p-2 pointer mr-3">
                                  <a href="#" />
                                  <img
                                    src="images/small/08.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />{' '}
                                  Tag Friend
                                </li>
                                <li className="iq-bg-primary rounded p-2 pointer mr-3">
                                  <a href="#" />
                                  <img
                                    src="images/small/09.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />{' '}
                                  Feeling/Activity
                                </li>
                                <li className="iq-bg-primary rounded p-2 pointer">
                                  <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                      <span
                                        className="dropdown-toggle"
                                        id="post-option"
                                        data-toggle="dropdown"
                                      >
                                        <i className="ri-more-fill" />
                                      </span>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="post-option"
                                        style={{}}
                                      >
                                        <a className="dropdown-item" href="#">
                                          Check in
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Live Video
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Gif
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Watch Party
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Play with Friend
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade"
                              id="post-modal"
                              tabIndex={-1}
                              role="dialog"
                              aria-labelledby="post-modalLabel"
                              aria-hidden="true"
                              style={{ display: 'none' }}
                            >
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="post-modalLabel">
                                      Create Post
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      <i className="ri-close-fill" />
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="d-flex align-items-center">
                                      <div className="user-img">
                                        <img
                                          src="images/user/1.jpg"
                                          alt="userimg"
                                          className="avatar-60 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <form
                                        className="post-text ml-3 w-100"
                                        action="javascript:void();"
                                      >
                                        <input
                                          type="text"
                                          className="form-control rounded"
                                          placeholder="Write something here..."
                                          style={{ border: 'none' }}
                                        />
                                      </form>
                                    </div>
                                    <hr />
                                    <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/07.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Photo/Video
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/08.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Tag Friend
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/09.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Feeling/Activity
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/10.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Check in
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/11.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Live Video
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/12.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Gif
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/13.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Watch Party
                                        </div>
                                      </li>
                                      <li className="col-md-6 mb-3">
                                        <div className="iq-bg-primary rounded p-2 pointer mr-3">
                                          <a href="#" />
                                          <img
                                            src="images/small/14.png"
                                            alt="icon"
                                            className="img-fluid"
                                          />{' '}
                                          Play with Friends
                                        </div>
                                      </li>
                                    </ul>
                                    <hr />
                                    <div className="other-option">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <div className="user-img mr-3">
                                            <img
                                              src="images/user/1.jpg"
                                              alt="userimg"
                                              className="avatar-60 rounded-circle img-fluid"
                                            />
                                          </div>
                                          <h6>Your Story</h6>
                                        </div>
                                        <div className="iq-card-post-toolbar">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              id="postdata-1"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <span className="btn btn-primary">Friend</span>
                                            </span>
                                            <div
                                              className="dropdown-menu m-0 p-0"
                                              aria-labelledby="postdata-1"
                                              style={{}}
                                            >
                                              <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                  <div className="icon font-size-20">
                                                    <i className="ri-save-line" />
                                                  </div>
                                                  <div className="data ml-2">
                                                    <h6>Public</h6>
                                                    <p className="mb-0">
                                                      Anyone on or off Facebook
                                                    </p>
                                                  </div>
                                                </div>
                                              </a>
                                              <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                  <div className="icon font-size-20">
                                                    <i className="ri-close-circle-line" />
                                                  </div>
                                                  <div className="data ml-2">
                                                    <h6>Friends</h6>
                                                    <p className="mb-0">Your Friend on facebook</p>
                                                  </div>
                                                </div>
                                              </a>
                                              <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                  <div className="icon font-size-20">
                                                    <i className="ri-user-unfollow-line" />
                                                  </div>
                                                  <div className="data ml-2">
                                                    <h6>Friends except</h6>
                                                    <p className="mb-0">
                                                      Don't show to some friends
                                                    </p>
                                                  </div>
                                                </div>
                                              </a>
                                              <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                  <div className="icon font-size-20">
                                                    <i className="ri-notification-line" />
                                                  </div>
                                                  <div className="data ml-2">
                                                    <h6>Only Me</h6>
                                                    <p className="mb-0">Only me</p>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-primary d-block w-100 mt-3"
                                    >
                                      Post
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="iq-card">
                            <div className="iq-card-body">
                              <div className="post-item">
                                <div className="user-post-data p-3">
                                  <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img mr-3">
                                      <img
                                        className="rounded-circle img-fluid"
                                        src="images/user/1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="media-support-info mt-2">
                                      <h5 className="mb-0 d-inline-block">
                                        <a href="#" className>
                                          Bni Cyst
                                        </a>
                                      </h5>
                                      <p className="ml-1 mb-0 d-inline-block">Add New Post</p>
                                      <p className="mb-0">3 hour ago</p>
                                    </div>
                                    <div className="iq-card-post-toolbar">
                                      <div className="dropdown">
                                        <span
                                          className="dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          role="button"
                                        >
                                          <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-save-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-pencil-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">
                                                  Update your post and saved items
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-close-circle-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-delete-bin-7-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">
                                                  Remove thids Post on Timeline
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-notification-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">
                                                  Turn on notifications for this post
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-post">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/p1.jpg"
                                      alt="post-image"
                                      className="img-fluid w-100"
                                    />
                                  </a>
                                </div>
                                <div className="comment-area mt-3">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="like-block position-relative d-flex align-items-center">
                                      <div className="d-flex align-items-center">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <img
                                                src="images/icon/01.png"
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </span>
                                            <div className="dropdown-menu">
                                              <a
                                                className="ml-2 mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Like"
                                              >
                                                <img
                                                  src="images/icon/01.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Love"
                                              >
                                                <img
                                                  src="images/icon/02.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Happy"
                                              >
                                                <img
                                                  src="images/icon/03.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="HaHa"
                                              >
                                                <img
                                                  src="images/icon/04.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Think"
                                              >
                                                <img
                                                  src="images/icon/05.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Sade"
                                              >
                                                <img
                                                  src="images/icon/06.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Lovely"
                                              >
                                                <img
                                                  src="images/icon/07.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="total-like-block ml-2 mr-3">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              140 Likes
                                            </span>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="#">
                                                Max Emum
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Bill Yerds
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Hap E. Birthday
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Tara Misu
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Midge Itz
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Sal Vidge
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Other
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="total-comment-block">
                                        <div className="dropdown">
                                          <span
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                          >
                                            20 Comment
                                          </span>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                              Max Emum
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Bill Yerds
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Hap E. Birthday
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Tara Misu
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Midge Itz
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Sal Vidge
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Other
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon mr-3">
                                      <a href="javascript:void();">
                                        <i className="ri-share-line" />
                                        <span className="ml-1">99 Share</span>
                                      </a>
                                    </div>
                                  </div>
                                  <hr />
                                  <ul className="post-comments p-0 m-0">
                                    <li className="mb-2">
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/02.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Monty Carlo</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/03.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Paul Molive</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <form
                                    className="comment-text d-flex align-items-center mt-3"
                                    action="javascript:void(0);"
                                  >
                                    <input type="text" className="form-control rounded" />
                                    <div className="comment-attagement d-flex">
                                      <a href="javascript:void();">
                                        <i className="ri-link mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-user-smile-line mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-camera-line mr-3" />
                                      </a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="post-item">
                                <div className="user-post-data p-3">
                                  <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img mr-3">
                                      <img
                                        className="rounded-circle img-fluid"
                                        src="images/user/1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="media-support-info mt-2">
                                      <h5 className="mb-0 d-inline-block">
                                        <a href="#" className>
                                          Bni Cyst
                                        </a>
                                      </h5>
                                      <p className="ml-1 mb-0 d-inline-block">
                                        Share Anna Mull's Post
                                      </p>
                                      <p className="mb-0">5 hour ago</p>
                                    </div>
                                    <div className="iq-card-post-toolbar">
                                      <div className="dropdown">
                                        <span
                                          className="dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          role="button"
                                        >
                                          <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-save-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-pencil-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">
                                                  Update your post and saved items
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-close-circle-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-delete-bin-7-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">
                                                  Remove thids Post on Timeline
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-notification-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">
                                                  Turn on notifications for this post
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-post">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/p3.jpg"
                                      alt="post-image"
                                      className="img-fluid w-100"
                                    />
                                  </a>
                                </div>
                                <div className="comment-area mt-3">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="like-block position-relative d-flex align-items-center">
                                      <div className="d-flex align-items-center">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <img
                                                src="images/icon/01.png"
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </span>
                                            <div className="dropdown-menu">
                                              <a
                                                className="ml-2 mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Like"
                                              >
                                                <img
                                                  src="images/icon/01.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Love"
                                              >
                                                <img
                                                  src="images/icon/02.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Happy"
                                              >
                                                <img
                                                  src="images/icon/03.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="HaHa"
                                              >
                                                <img
                                                  src="images/icon/04.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Think"
                                              >
                                                <img
                                                  src="images/icon/05.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Sade"
                                              >
                                                <img
                                                  src="images/icon/06.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Lovely"
                                              >
                                                <img
                                                  src="images/icon/07.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="total-like-block ml-2 mr-3">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              140 Likes
                                            </span>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="#">
                                                Max Emum
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Bill Yerds
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Hap E. Birthday
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Tara Misu
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Midge Itz
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Sal Vidge
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Other
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="total-comment-block">
                                        <div className="dropdown">
                                          <span
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                          >
                                            20 Comment
                                          </span>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                              Max Emum
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Bill Yerds
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Hap E. Birthday
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Tara Misu
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Midge Itz
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Sal Vidge
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Other
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon mr-3">
                                      <a href="javascript:void();">
                                        <i className="ri-share-line" />
                                        <span className="ml-1">99 Share</span>
                                      </a>
                                    </div>
                                  </div>
                                  <hr />
                                  <ul className="post-comments p-0 m-0">
                                    <li className="mb-2">
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/02.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Monty Carlo</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/03.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Paul Molive</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <form
                                    className="comment-text d-flex align-items-center mt-3"
                                    action="javascript:void(0);"
                                  >
                                    <input type="text" className="form-control rounded" />
                                    <div className="comment-attagement d-flex">
                                      <a href="javascript:void();">
                                        <i className="ri-link mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-user-smile-line mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-camera-line mr-3" />
                                      </a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="post-item">
                                <div className="user-post-data p-3">
                                  <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img mr-3">
                                      <img
                                        className="rounded-circle img-fluid"
                                        src="images/user/1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="media-support-info mt-2">
                                      <h5 className="mb-0 d-inline-block">
                                        <a href="#" className>
                                          Bni Cyst
                                        </a>
                                      </h5>
                                      <p className="ml-1 mb-0 d-inline-block">Update his Status</p>
                                      <p className="mb-0">7 hour ago</p>
                                    </div>
                                    <div className="iq-card-post-toolbar">
                                      <div className="dropdown">
                                        <span
                                          className="dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          role="button"
                                        >
                                          <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-save-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-pencil-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">
                                                  Update your post and saved items
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-close-circle-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-delete-bin-7-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">
                                                  Remove thids Post on Timeline
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-notification-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">
                                                  Turn on notifications for this post
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-post">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries,
                                  </p>
                                </div>
                                <div className="comment-area mt-3">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="like-block position-relative d-flex align-items-center">
                                      <div className="d-flex align-items-center">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <img
                                                src="images/icon/01.png"
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </span>
                                            <div className="dropdown-menu">
                                              <a
                                                className="ml-2 mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Like"
                                              >
                                                <img
                                                  src="images/icon/01.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Love"
                                              >
                                                <img
                                                  src="images/icon/02.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Happy"
                                              >
                                                <img
                                                  src="images/icon/03.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="HaHa"
                                              >
                                                <img
                                                  src="images/icon/04.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Think"
                                              >
                                                <img
                                                  src="images/icon/05.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Sade"
                                              >
                                                <img
                                                  src="images/icon/06.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Lovely"
                                              >
                                                <img
                                                  src="images/icon/07.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="total-like-block ml-2 mr-3">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              140 Likes
                                            </span>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="#">
                                                Max Emum
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Bill Yerds
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Hap E. Birthday
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Tara Misu
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Midge Itz
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Sal Vidge
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Other
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="total-comment-block">
                                        <div className="dropdown">
                                          <span
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                          >
                                            20 Comment
                                          </span>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                              Max Emum
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Bill Yerds
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Hap E. Birthday
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Tara Misu
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Midge Itz
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Sal Vidge
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Other
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon mr-3">
                                      <a href="javascript:void();">
                                        <i className="ri-share-line" />
                                        <span className="ml-1">99 Share</span>
                                      </a>
                                    </div>
                                  </div>
                                  <hr />
                                  <ul className="post-comments p-0 m-0">
                                    <li className="mb-2">
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/02.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Monty Carlo</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/03.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Paul Molive</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <form
                                    className="comment-text d-flex align-items-center mt-3"
                                    action="javascript:void(0);"
                                  >
                                    <input type="text" className="form-control rounded" />
                                    <div className="comment-attagement d-flex">
                                      <a href="javascript:void();">
                                        <i className="ri-link mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-user-smile-line mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-camera-line mr-3" />
                                      </a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="post-item">
                                <div className="user-post-data p-3">
                                  <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img mr-3">
                                      <img
                                        className="rounded-circle img-fluid"
                                        src="images/user/1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="media-support-info mt-2">
                                      <h5 className="mb-0 d-inline-block">
                                        <a href="#" className>
                                          Bni Cyst
                                        </a>
                                      </h5>
                                      <p className="ml-1 mb-0 d-inline-block">
                                        Change Profile Picture
                                      </p>
                                      <p className="mb-0">3 day ago</p>
                                    </div>
                                    <div className="iq-card-post-toolbar">
                                      <div className="dropdown">
                                        <span
                                          className="dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          role="button"
                                        >
                                          <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-save-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-pencil-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">
                                                  Update your post and saved items
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-close-circle-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-delete-bin-7-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">
                                                  Remove thids Post on Timeline
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                              <div className="icon font-size-20">
                                                <i className="ri-notification-line" />
                                              </div>
                                              <div className="data ml-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">
                                                  Turn on notifications for this post
                                                </p>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="user-post text-center">
                                  <a href="javascript:void();">
                                    <img
                                      src="images/page-img/p1.jpg"
                                      alt="post-image"
                                      className="img-fluid profile-img"
                                    />
                                  </a>
                                </div>
                                <div className="comment-area mt-3">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="like-block position-relative d-flex align-items-center">
                                      <div className="d-flex align-items-center">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <img
                                                src="images/icon/01.png"
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </span>
                                            <div className="dropdown-menu">
                                              <a
                                                className="ml-2 mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Like"
                                              >
                                                <img
                                                  src="images/icon/01.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Love"
                                              >
                                                <img
                                                  src="images/icon/02.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Happy"
                                              >
                                                <img
                                                  src="images/icon/03.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="HaHa"
                                              >
                                                <img
                                                  src="images/icon/04.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Think"
                                              >
                                                <img
                                                  src="images/icon/05.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Sade"
                                              >
                                                <img
                                                  src="images/icon/06.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                              <a
                                                className="mr-2"
                                                href="#"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title
                                                data-original-title="Lovely"
                                              >
                                                <img
                                                  src="images/icon/07.png"
                                                  className="img-fluid"
                                                  alt=""
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="total-like-block ml-2 mr-3">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              140 Likes
                                            </span>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="#">
                                                Max Emum
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Bill Yerds
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Hap E. Birthday
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Tara Misu
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Midge Itz
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Sal Vidge
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Other
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="total-comment-block">
                                        <div className="dropdown">
                                          <span
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                          >
                                            20 Comment
                                          </span>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">
                                              Max Emum
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Bill Yerds
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Hap E. Birthday
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Tara Misu
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Midge Itz
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Sal Vidge
                                            </a>
                                            <a className="dropdown-item" href="#">
                                              Other
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon mr-3">
                                      <a href="javascript:void();">
                                        <i className="ri-share-line" />
                                        <span className="ml-1">99 Share</span>
                                      </a>
                                    </div>
                                  </div>
                                  <hr />
                                  <ul className="post-comments p-0 m-0">
                                    <li className="mb-2">
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/02.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Monty Carlo</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex flex-wrap">
                                        <div className="user-img">
                                          <img
                                            src="images/user/03.jpg"
                                            alt="userimg"
                                            className="avatar-35 rounded-circle img-fluid"
                                          />
                                        </div>
                                        <div className="comment-data-block ml-3">
                                          <h6>Paul Molive</h6>
                                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <form
                                    className="comment-text d-flex align-items-center mt-3"
                                    action="javascript:void(0);"
                                  >
                                    <input type="text" className="form-control rounded" />
                                    <div className="comment-attagement d-flex">
                                      <a href="javascript:void();">
                                        <i className="ri-link mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-user-smile-line mr-3" />
                                      </a>
                                      <a href="javascript:void();">
                                        <i className="ri-camera-line mr-3" />
                                      </a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="about" role="tabpanel">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <ul className="nav nav-pills basic-info-items list-inline d-block p-0 m-0">
                              <li>
                                <a className="nav-link active" data-toggle="pill" href="#basicinfo">
                                  Contact and Basic Info
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" data-toggle="pill" href="#family">
                                  Family and Relationship
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" data-toggle="pill" href="#work">
                                  Work and Education
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" data-toggle="pill" href="#lived">
                                  Places You've Lived
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" data-toggle="pill" href="#details">
                                  Details About You
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-9 pl-4">
                            <div className="tab-content">
                              <div
                                className="tab-pane fade active show"
                                id="basicinfo"
                                role="tabpanel"
                              >
                                <h4>Contact Information</h4>
                                <hr />
                                <div className="row">
                                  <div className="col-3">
                                    <h6>Email</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Bnijohn@gmail.com</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>Mobile</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">(001) 4544 565 456</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>Address</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">United States of America</p>
                                  </div>
                                </div>
                                <h4 className="mt-3">Websites and Social Links</h4>
                                <hr />
                                <div className="row">
                                  <div className="col-3">
                                    <h6>Website</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">www.bootstrap.com</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>Social Link</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">www.bootstrap.com</p>
                                  </div>
                                </div>
                                <h4 className="mt-3">Basic Information</h4>
                                <hr />
                                <div className="row">
                                  <div className="col-3">
                                    <h6>Birth Date</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">24 January</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>Birth Year</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">1994</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>Gender</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Female</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>interested in</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Designing</p>
                                  </div>
                                  <div className="col-3">
                                    <h6>language</h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">English, French</p>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="family" role="tabpanel">
                                <h4 className="mb-3">Relationship</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add Your Relationship Status</h6>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3">Family Members</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add Family Members</h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/01.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Paul Molive</h6>
                                      <p className="mb-0">Brothe</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/02.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Anna Mull</h6>
                                      <p className="mb-0">Sister</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/03.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Paige Turner</h6>
                                      <p className="mb-0">Cousin</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-pane fade" id="work" role="tabpanel">
                                <h4 className="mb-3">Work</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add Work Place</h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/01.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Themeforest</h6>
                                      <p className="mb-0">Web Designer</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/02.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>iqonicdesign</h6>
                                      <p className="mb-0">Web Developer</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/03.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>W3school</h6>
                                      <p className="mb-0">Designer</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mb-3">Professional Skills</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add Professional Skills</h6>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3">College</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add College</h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/01.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Lorem ipsum</h6>
                                      <p className="mb-0">USA</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-pane fade" id="lived" role="tabpanel">
                                <h4 className="mb-3">Current City and Hometown</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/01.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Georgia</h6>
                                      <p className="mb-0">Georgia State</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src="images/user/02.jpg"
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Atlanta</h6>
                                      <p className="mb-0">Atlanta City</p>
                                    </div>
                                    <div className="edit-relation">
                                      <a href="javascript:void();">
                                        <i className="ri-edit-line mr-2" />
                                        Edit
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3">Other Places Lived</h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill" />
                                    </div>
                                    <div className="media-support-info ml-3">
                                      <h6>Add Place</h6>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-pane fade" id="details" role="tabpanel">
                                <h4 className="mb-3">About You</h4>
                                <p>
                                  Hi, I???m Bni, I???m 26 and I work as a Web Designer for the
                                  iqonicdesign.
                                </p>
                                <h4 className="mt-3 mb-3">Other Name</h4>
                                <p>Bini Rock</p>
                                <h4 className="mt-3 mb-3">Favorite Quotes</h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting
                                  industry. Lorem Ipsum has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="friends" role="tabpanel">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <h2>Friends</h2>
                        <div className="friend-list-tab mt-2">
                          <ul className="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                            <li>
                              <a className="nav-link active" data-toggle="pill" href="#all-friends">
                                All Friends
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" data-toggle="pill" href="#recently-add">
                                Recently Added
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" data-toggle="pill" href="#closefriends">
                                Close friends
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" data-toggle="pill" href="#home">
                                Home/Town
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" data-toggle="pill" href="#following">
                                Following
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              className="tab-pane fade active show"
                              id="all-friends"
                              role="tabpanel"
                            >
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Petey Cruiser</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton01"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton01"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Anna Sthesia</h5>
                                            <p className="mb-0">50 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton02"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton02"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Paul Molive</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton03"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton03"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Gail Forcewind</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton04"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton04"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/09.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Paige Turner</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton05"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton05"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/10.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>b Frapples</h5>
                                            <p className="mb-0">6 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton06"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton06"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/13.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Walter Melon</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton07"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton07"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/14.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barb Ackue</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton08"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton08"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/15.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Buck Kinnear</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton09"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton09"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/16.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Ira Membrit</h5>
                                            <p className="mb-0">22 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton10"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton10"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/17.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Shonda Leer</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton11"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton11"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/18.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>ock Lee</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton12"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton12"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/19.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">40 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton13"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton13"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Rick O'Shea</h5>
                                            <p className="mb-0">50 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton14"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton14"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Pete Sariya</h5>
                                            <p className="mb-0">5 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton15"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton15"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Monty Carlo</h5>
                                            <p className="mb-0">2 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton16"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton16"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Sal Monella</h5>
                                            <p className="mb-0">0 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton17"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton17"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/09.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Sue Vaneer</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton18"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton18"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/10.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Cliff Hanger</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton19"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton19"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barb Dwyer</h5>
                                            <p className="mb-0">23 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton20"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton20"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Terry Aki</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton21"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton21"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/13.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Cory Ander</h5>
                                            <p className="mb-0">7 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton22"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton22"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/14.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Robin Banks</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton23"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton23"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/15.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Jimmy Changa</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton24"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton24"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/16.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barry Wine</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton25"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton25"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/17.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Poppa Cherry</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton26"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton26"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/18.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Zack Lee</h5>
                                            <p className="mb-0">33 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton27"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton27"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/19.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Don Stairs</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton28"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton28"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton29"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton29"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Hal Appeno </h5>
                                            <p className="mb-0">13 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton30"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton30"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="recently-add" role="tabpanel">
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Otto Matic</h5>
                                            <p className="mb-0">4 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton31"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton31"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Moe Fugga</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton32"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton32"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/09.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Tom Foolery</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton33"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton33"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/10.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Bud Wiser</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton34"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton34"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/15.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton35"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton35"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/16.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Holly Graham</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton36"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton36"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/17.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Tara Zona</h5>
                                            <p className="mb-0">5 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton37"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton37"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/18.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barry Cade</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton38"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton38"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="closefriends" role="tabpanel">
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/19.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Bud Wiser</h5>
                                            <p className="mb-0">32 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton39"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton39"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Otto Matic</h5>
                                            <p className="mb-0">9 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton40"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton40"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">2 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton41"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton41"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Zack Lee</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton42"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton42"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barry Wine</h5>
                                            <p className="mb-0">36 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton43"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton43"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/09.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Robin Banks</h5>
                                            <p className="mb-0">22 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton44"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton44"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/10.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Cory Ander</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton45"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton45"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/15.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Moe Fugga</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton46"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton46"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/16.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton47"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton47"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/17.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Hal Appeno</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton48"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton48"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="home" role="tabpanel">
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/18.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Paul Molive</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton49"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton49"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/19.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Paige Turner</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton50"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton50"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Barb Ackue</h5>
                                            <p className="mb-0">23 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton51"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton51"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Ira Membrit</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton52"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton52"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton53"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton53"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="following" role="tabpanel">
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton54"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton54"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Monty Carlo</h5>
                                            <p className="mb-0">3 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton55"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton55"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Cliff Hanger</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton56"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton56"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>b Ackue</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton57"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton57"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/09.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Bob Frapples</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton58"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton58"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/10.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Anna Mull</h5>
                                            <p className="mb-0">6 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton59"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton59"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/15.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>ry Wine</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton60"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton60"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/16.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Don Stairs</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton61"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton61"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/17.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton62"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton62"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/18.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton63"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton63"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/19.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Tara Zona</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton64"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton64"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/05.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Arty Ficial</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton65"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton65"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/06.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Bill Emia</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton66"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton66"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/07.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Bill Yerds</h5>
                                            <p className="mb-0">9 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton67"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton67"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <a href="#">
                                            <img
                                              src="images/user/08.jpg"
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </a>
                                          <div className="friend-info ml-3">
                                            <h5>Matt Innae</h5>
                                            <p className="mb-0">19 friends</p>
                                          </div>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle btn btn-secondary mr-2"
                                              id="dropdownMenuButton68"
                                              data-toggle="dropdown"
                                              aria-expanded="true"
                                              role="button"
                                            >
                                              <i className="ri-check-line mr-1 text-white font-size-16" />{' '}
                                              Friend
                                            </span>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              aria-labelledby="dropdownMenuButton68"
                                            >
                                              <a className="dropdown-item" href="#">
                                                Get Notification
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Close Friend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfollow
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Unfriend
                                              </a>
                                              <a className="dropdown-item" href="#">
                                                Block
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="photos" role="tabpanel">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <h2>Photos</h2>
                        <div className="friend-list-tab mt-2">
                          <ul className="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                            <li>
                              <a className="nav-link active" data-toggle="pill" href="#photosofyou">
                                Photos of You
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" data-toggle="pill" href="#your-photos">
                                Your Photos
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              className="tab-pane fade active show"
                              id="photosofyou"
                              role="tabpanel"
                            >
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/51.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/52.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/53.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/54.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/55.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/56.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/57.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/58.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/59.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/60.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/61.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/62.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/63.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/64.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/65.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/51.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/52.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/53.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/54.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/55.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/56.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/57.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/58.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/59.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="your-photos" role="tabpanel">
                              <div className="iq-card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/51.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/52.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/53.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/54.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/55.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/56.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/57.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/58.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/59.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="user-images position-relative overflow-hidden">
                                      <a href="#">
                                        <img
                                          src="images/page-img/60.jpg"
                                          className="img-fluid rounded"
                                          alt="Responsive image"
                                        />
                                      </a>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                60 <i className="ri-thumb-up-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                30 <i className="ri-chat-3-line" />{' '}
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" className="pr-3 text-white">
                                                {' '}
                                                10 <i className="ri-share-forward-line" />{' '}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="image-edit-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title
                                        data-original-title="Edit or Remove"
                                      >
                                        <i className="ri-edit-2-fill" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 text-center">
                <img
                  src="images/page-img/page-load-loader.gif"
                  alt="loader"
                  style={{ height: '100px' }}
                />
              </div>
            </div>
          </div>*/}
        </div> 
      </div>
    </div>
      </div>
   
  );
};

export default connect()(Dashboard);
