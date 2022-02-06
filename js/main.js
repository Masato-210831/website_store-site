'use strict'

{
  
  const header = document.getElementById('header');
  const btn1 = document.querySelector('.menu-btn');
  const border = document.querySelectorAll('.menu-btn span');

  const sideBarBtn = document.getElementById('sidebar-btn');
  const sideBar = document.getElementById('sidebar');
  const wrapper = document.querySelectorAll('.wrapper');
  const overlay = document.querySelector('.overlay');


  // ボタンを押す→黒背景にメニューが現れる
  btn1.addEventListener('click', () => {
    // headerに.openがあるかで条件分岐
    if (header.classList.contains('open')) {
      header.classList.remove('open');
      border.forEach(border => {
      border.style.background = '#000';
    } );
  } else {
    header.classList.add('open');
    border.forEach(border => {
      border.style.background = '#fff'
    } );
  };
})

  // サイドバー関係の処理
  sideBarBtn.addEventListener('click', () => {
    if (sideBar.classList.contains('open')) {
      sideBar.style.opacity = 0;
      sideBar.style.left = '-200px';
      sideBar.classList.remove('open');
      sideBarBtn.classList.remove('open');
      overlay.style.display = 'none';
    } else {
      sideBar.classList.add('open');
      sideBarBtn.classList.add('open');
      sideBar.style.opacity = 1;
      sideBar.style.left = 0;
      overlay.style.display = 'block';
    }

    overlay.addEventListener('click', () => {
      sideBar.style.opacity = 0;
      sideBar.style.left = '-200px';
      sideBar.classList.remove('open');
      sideBarBtn.classList.remove('open');
      overlay.style.display = 'none';
    })
  });



}

