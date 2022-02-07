import React, { useEffect, useState } from 'react';
import highAlarm from '../../assets/high.ogg';
import lowAlarm from '../../assets/low.ogg';
import icon from '../../assets/logo.png';

import Bell from '../Bell/Bell';
import regex from '../../helpers/regexp';

import './PriceNotification.scss';

import { Modal } from '../Modal/Modal';
import BigNumber from 'bignumber.js';

const HighAlarm = new Audio(highAlarm);
const LowAlarm = new Audio(lowAlarm);

HighAlarm.loop = true;
LowAlarm.loop = true;

const PriceNotification = ({ currentPrice, symbol }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [highPrice, setHighPrice] = useState(
    localStorage.getItem(`HIGH_PRICE_ALARM_${symbol}`) ?? '',
  );
  const [lowPrice, setLowPrice] = useState(localStorage.getItem(`LOW_PRICE_ALARM_${symbol}`) ?? '');
  const [highPriceNotificationSent, setHighPriceNotificationSent] = useState(false);
  const [lowPriceNotificationSent, setLowPriceNotificationSent] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (typing) return;

    if (new BigNumber(lowPrice).isGreaterThanOrEqualTo(currentPrice) && Number(lowPrice) !== 0) {
      LowAlarm.play();
      if (!lowPriceNotificationSent) {
        if (window.Notification) {
          if (Notification.permission === 'granted') {
            new Notification(`${symbol} dropped to ${lowPrice} USD`, {
              body: `Price: ${currentPrice} USD`,
              icon: icon,
            });
          } else if (
            Notification.permission !== 'denied' ||
            Notification.permission === 'default'
          ) {
            Notification.requestPermission(function (permission) {
              if (permission === 'granted') {
                new Notification(`${symbol} dropped to ${lowPrice} USD`, {
                  body: `Price: ${currentPrice} USD`,
                  icon: icon,
                });
              }
            });
          }

          setLowPriceNotificationSent(true);
        }
      }
    } else {
      LowAlarm.pause();
    }

    if (new BigNumber(currentPrice).isGreaterThanOrEqualTo(highPrice) && Number(highPrice) !== 0) {
      HighAlarm.play();
      if (!highPriceNotificationSent) {
        if (window.Notification) {
          if (Notification.permission === 'granted') {
            new Notification(`${symbol} reached ${highPrice} USD`, {
              body: `Price: ${currentPrice} USD`,
              icon: icon,
            });
          } else if (
            Notification.permission !== 'denied' ||
            Notification.permission === 'default'
          ) {
            Notification.requestPermission(function (permission) {
              if (permission === 'granted') {
                new Notification(`${symbol} reached ${highPrice} USD`, {
                  body: `Price: ${currentPrice} USD`,
                  icon: icon,
                });
              }
            });
          }
        }
        setHighPriceNotificationSent(true);
      }
    } else {
      HighAlarm.pause();
    }

    if (!lowPrice || Number(lowPrice) === 0) {
      LowAlarm.pause();
    }

    if (!highPrice || Number(highPrice) === 0) {
      HighAlarm.pause();
    }
  }, [
    currentPrice,
    lowPrice,
    highPrice,
    symbol,
    lowPriceNotificationSent,
    highPriceNotificationSent,
    typing,
  ]);

  useEffect(() => {
    setLowPrice(localStorage.getItem(`LOW_PRICE_ALARM_${symbol}`));
    setHighPrice(localStorage.getItem(`HIGH_PRICE_ALARM_${symbol}`));
    setHighPriceNotificationSent(false);
    setLowPriceNotificationSent(false);
  }, [symbol]);

  useEffect(() => {
    setTyping(true);
    setHighPriceNotificationSent(false);
    setLowPriceNotificationSent(false);

    const id = setTimeout(() => setTyping(false), 2000);

    return () => {
      clearTimeout(id);
    };
  }, [lowPrice, highPrice]);

  const handleHighPriceChange = (e) => {
    if (regex.NUMBER_COMMA_DOT.test(e.target.value)) {
      const value = e.target.value.replace(',', '.');
      localStorage.setItem(`HIGH_PRICE_ALARM_${symbol}`, value);
      setHighPrice(value);
    }
  };

  const handleLowPriceChange = (e) => {
    if (regex.NUMBER_COMMA_DOT.test(e.target.value)) {
      const value = e.target.value.replace(',', '.');
      localStorage.setItem(`LOW_PRICE_ALARM_${symbol}`, value);
      setLowPrice(value);
    }
  };

  const clearHighPrice = () => {
    localStorage.setItem(`HIGH_PRICE_ALARM_${symbol}`, '');
    setHighPrice('');
  };

  const clearLowPrice = () => {
    localStorage.setItem(`LOW_PRICE_ALARM_${symbol}`, '');
    setLowPrice('');
  };

  const clearBoth = () => {
    clearHighPrice();
    clearLowPrice();
  };

  const isActive = (highPrice && Number(highPrice) > 0) || (lowPrice && Number(lowPrice) > 0);

  return (
    <>
    
      <Bell isActive={isActive} onClick={() => setModalVisibility(true)} />
      {isModalVisible && (
        <Modal toggleModal={() => setModalVisibility(false)}>
          <h3 className="alarm-modal__heading">Set up an alarm</h3>
          <form className="alarm-modal__form" onSubmit={(e) => e.preventDefault()}>
            <div className="alarm-modal__input-container">
              <label className="alarm-modal__input-label" htmlFor="high-price">
                High Price:
              </label>
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="high-price"
                  value={highPrice}
                  onChange={handleHighPriceChange}
                />
                <button className="alarm-modal__btn" onClick={clearHighPrice}>
                  Clear
                </button>
              </div>
            </div>
            <div className="alarm-modal__input-container">
              <label className="alarm-modal__input-label" htmlFor="low-price">
                Low Price:
              </label>
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="low-price"
                  value={lowPrice}
                  onChange={handleLowPriceChange}
                />
                <button className="alarm-modal__btn" onClick={clearLowPrice}>
                  Clear
                </button>
              </div>
            </div>
            <div className="alarm-modal__footer-btn-container">
              <button className="alarm-modal__btn" onClick={clearBoth}>
                Clear All
              </button>
              <button className="alarm-modal__btn" onClick={() => setModalVisibility(false)}>
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default PriceNotification;
