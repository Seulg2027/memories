import React from 'react';
import Header from 'components/shared/navbar/navbar';
import History from 'components/history/history';
import Pagenation from 'components/shared/pagenation/pagenation';
import Involved from 'components/involved/involved';
import { Body } from './styles';
import useScript from 'assets/animation/main';
import Intro from 'components/intro/intro';
import Exhibition from 'components/exhibition';
import MenuBar from 'components/MenuBar';

const Main = () => {
  useScript();

  document.addEventListener('scroll', function () {
    if (!document.querySelector('.menuBar').classList.contains('on')) {
      document.querySelector('.menuBar').style.top = `${
        window.scrollY - window.innerHeight - 100
      }px`;
    }
  });

  const onClickMenuBar = () => {
    let menuBar = document.querySelector('.menuBar');
    if (!menuBar.classList.contains('on')) {
      menuBar.style.transition = 'all 1s ease';

      menuBar.style.top = `${window.scrollY}px`;
      menuBar.classList.add('on');
    } else {
      menuBar.style.top = `${window.scrollY - window.innerHeight - 100}px`;
      menuBar.classList.remove('on');

      setTimeout(() => {
        menuBar.style.transition = '';
      }, 1000);
    }
  };

  return (
    <>
      <Body>
        <MenuBar />
        <Header onClickMenuBar={onClickMenuBar} />
        <Intro />
        <History />
        <Exhibition />
        <Involved />
        <Pagenation />
      </Body>
    </>
  );
};

export default Main;
