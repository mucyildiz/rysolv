import React, { Fragment } from 'react';
import T from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import AsyncRender from 'components/AsyncRender';
import { ModalDialog } from 'components/base_ui';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideNav from 'components/SideNav';
import WatchList from 'components/WatchList';
import makeSelectViewSize from 'containers/ViewSize/selectors';
import { makeSelectAuth } from 'containers/Auth/selectors';
import { signin, signout } from 'containers/Auth/actions';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { closeModalState, fetchWatchList } from './actions';
import reducer from './reducer';
import routes from './routes';
import saga from './saga';
import { makeSelectMain, makeSelectModalProps } from './selectors';
import { AppBody } from './styledComponents';

export const Main = ({
  activeUser,
  data = { test: true },
  deviceView,
  dispatchCloseModal,
  error,
  handleNav,
  handleSignin,
  handleSignout,
  isIssueWatchListModalOpen,
  isSignedIn,
  loading,
  match,
  modal,
  tableData,
}) => {
  const handleRedirect = route => {
    dispatchCloseModal();
    handleNav(route);
  };
  const modalPropsDictionary = {
    issueWatchList: {
      Component: WatchList,
      open: isIssueWatchListModalOpen,
      propsToPassDown: {
        handleClose: dispatchCloseModal,
        handleRedirect,
        modalState: 'issueWatchList',
        route: '/users/detail',
        tableData,
        title: 'Watch List',
        type: 'issueWatchList',
      },
    },
  };
  return (
    <Fragment>
      <Header
        activeUser={activeUser}
        handleNav={handleNav}
        handleSignin={handleSignin}
        handleSignout={handleSignout}
        isSignedIn={isSignedIn}
        view={deviceView}
      />
      <AppBody>
        <SideNav handleNav={handleNav} view={deviceView} />
        <AsyncRender
          asyncData={data}
          component={routes}
          error={error}
          loading={loading}
          match={match}
        />
      </AppBody>
      <Footer />
      {modal && <ModalDialog {...modalPropsDictionary[modal]} />}
    </Fragment>
  );
};

Main.propTypes = {
  activeUser: T.object,
  data: T.object,
  deviceView: T.string,
  dispatchCloseModal: T.func,
  error: T.object,
  handleNav: T.func,
  handleSignin: T.func,
  handleSignout: T.func,
  isIssueWatchListModalOpen: T.bool,
  isSignedIn: T.bool,
  loading: T.bool,
  match: T.object,
  modal: T.string,
  tableData: T.arrayOf(T.object),
};

const mapStateToProps = createStructuredSelector({
  /**
   * Reducer: Auth
   */
  activeUser: makeSelectAuth('activeUser'),
  isIssueWatchListModalOpen: makeSelectModalProps('issueWatchList'),
  isSignedIn: makeSelectAuth('isSignedIn'),
  modal: makeSelectMain('modal'),
  tableData: makeSelectMain('tableData'),
  /**
   * Reducer: ViewSizes
   */
  deviceView: makeSelectViewSize('deviceView'),
});

const mapDispatchToProps = dispatch => ({
  /**
   * Auth
   */
  handleSignin: payload => dispatch(signin(payload)),
  handleSignout: payload => dispatch(signout(payload)),
  /**
   * Main
   */
  dispatchFetchWatchList: payload => dispatch(fetchWatchList(payload)),
  dispatchCloseModal: payload => dispatch(closeModalState(payload)),
  /*
   * Reducer : Router
   */
  handleNav: route => dispatch(push(route)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'main', reducer });
const withSaga = injectSaga({ key: 'main', saga });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(Main),
);
