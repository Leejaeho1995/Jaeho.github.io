// const totalCount = 127;
// const pageSize =5;
// const listSize = 10;
// const page = 10; //현재 페이지
// //페이지 수는? 소수점을 올림해서 나머지 카운트를 하나의 페이지로 구성
// const totalPage = Math.ceil(totalCount / listSize); // 127/ 10 =12... 반올림후 13페이지

// //시작 페이지
// //1 2 3 4 5
// const startPage = Math.floor((page-1)/pageSize);
// /*StartPage에 0이 나오면 시작페이지는 1페이지가 시작페이지
// StartPage에 1이 나오면 시작페이지는 6페이지가 시작페이지
// StartPage에 2가 나오면 시작페이지는 11페이지가 시작페이지 */
// //마지막 페이지
// let endPage = startPage + pageSize -1;
// if(endPage > totalPage) endPage = totalPage;
