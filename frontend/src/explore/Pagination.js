// import React from 'react'

// const Pagination = () => {
//   return (
//     <div className="pagination">
//     <span
//       className="prev"
//       onClick={() => {
//         if (selectedPage === 1) {
//           return setPageNumber(pagingationArr.length);
//         }
//         setPageNumber((prevPage) => prevPage - 1);
//       }}
//     >
//       Prev
//     </span>
//     {pagingationArr.map((page, index) => {
//       return (
//         <Link to={`/page/${index + 1}`}>
//           <ShowPage
//             page={page}
//             index={index}
//             selectedPage={selectedPage}
//             setPageNumber={setPageNumber}
//           />
//         </Link>
//       );
//     })}
//     <span
//       className="next"
//       onClick={() => {
//         if (selectedPage === pagingationArr.length) {
//           return setPageNumber(1);
//         }
//         setPageNumber((prevPage) => prevPage + 1);
//       }}
//     >
//       Next
//     </span>
//   </div>
//     )
// }

// export default Pagination
