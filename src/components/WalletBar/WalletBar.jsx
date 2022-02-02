import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WalletAction, { WalletHelper } from '../../actions/wallet.actions';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Modal } from '../Modal/Modal';
import './WalletBar.scss';

const WalletBar = () => {
  const wallet = useSelector((store) => store.Wallet);
  const [modalOpen, setModalOpen] = useState(false);
  const [inProgress, setinProgress] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const connectEthereumProvider = () => {
    setinProgress(true);
    WalletHelper.ConnectByEthereumProvider()
      .then(() => {
        setModalOpen(false);
        setinProgress(false);
      })
      .catch((error) => {
        setinProgress(false);
        alert(error);
      });
  };

  const connectWalletConnect = () => {
    setinProgress(true);
    WalletHelper.ConnectByWalletConnect()
      .then(() => {
        setModalOpen(false);
        setinProgress(false);
      })
      .catch((error) => {
        console.log('3');
        setinProgress(false);
        alert(error);
      });
  };

  const disconnect = () => {
    dispatch(WalletAction.DisconnectWallet());
  };

  if (wallet.connected) {
    return (
      <div className="WalletBar d-flex align-items-center justify-content-end">
        <p className="mb-0 me-3 text-truncate" style={{ maxWidth: 250 }}>
          Connected: {wallet.address}
        </p>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className="WalletBar">
      <button onClick={openModal}>Connect Wallet</button>
      {wallet.loading && <LoadingScreen />}
      {modalOpen && (
        <Modal toggleModal={setModalOpen}>
          <div className="d-flex flex-column">
            <button className="mb-3" disabled={inProgress} onClick={connectEthereumProvider}>
              Metamask
            </button>
            <button className="mb-3" disabled={inProgress} onClick={connectWalletConnect}>
              WalletConnect
            </button>
            <button
              className=""
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default React.memo(WalletBar);
