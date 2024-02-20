// // import Progressbar from "../progressbar/progressbar";

// // const Card = ({ className, CardData, innerTextColor, statsStyling, titleWeight, engagmentsStyling, titleStyling }) => {

// //     return (
// //         <>
// //             {CardData && CardData.length > 0 && CardData.map((item, index) => (

// //                 <div key={index} className={`${className} w-[188px]`}>
// //                     <div className="flex justify-between">
// //                         {item.title && <span className={`${titleStyling} ${titleWeight} text-[14px] leading-[20px]`}>{item.title}</span>}
// //                         {Array.isArray(item.tag) ? <ul className="w-[220px] flex justify-between pe-[23px]">
// //                             {item.tag.map((tagItem, index) => <li className=" text-[10px] text-[#000] font-[500] list-disc list-disc-[#fff] leading-[20px]" key={index}>{tagItem.taginner}</li>)}
// //                         </ul> :
// //                             <>{item.tag && <span className="text-[#72BFBD] text-[12px] font-[500] pe-[14px] ">{item.tag}</span>}</>}
// //                     </div>
// //                     <div className="flex justify-between pb-[6px]">
// //                         {Array.isArray(item.stats) ?
// //                             (
// //                                 item.stats && item.stats.map((statsItem, index) => <div className="flex flex-col" key={index}>
// //                                     <span className="text-[#606465] text-[24px] font-[500] leading-[20px] pb-[3px]">{statsItem.digit}</span>
// //                                     <span className="text-[#606465] text-[14px] font-[500] leading-[20px]">{statsItem.status}</span>
// //                                 </div>)
// //                             )
// //                             : (
// //                                 <div>{item.stats && <span className={`${innerTextColor} ${statsStyling} font-[500] leading-[1] `}>{item.stats}{item.per && <span className="text-[16px] font-[500] leading-[20px] text-[#fff]">{item.per}</span>}</span>}</div>
// //                             )}
// //                     </div>
// //                     {item.isTable && <table className="w-[px] flex justify-between pe-[40px]">
// //                         {item.broadcastTableData.map((data, dataindex) => <div className="flex flex-col ">
// //                             <tr key={dataindex}><th className="text-[#606465] text-[14px] font-[500] leading-[20px] pb-[20px]">{data.tabletitle}</th></tr>
// //                             <>
// //                                 {data.isProgressbar ?
// //                                     <div className="flex flex-col w-[116px] gap-y-[33px] pt-[6px]">
// //                                         <Progressbar type={data.progressbarType} progressData={data.rows} className="top-[-20px] right-[0px]" />
// //                                     </div>
// //                                     :
// //                                     data.rows.map((rowdata, rowindex) => (
// //                                         <tr key={rowindex} className="pb-[20px]">
// //                                             <td className="text-[#606465] text-[14px] font-[500] leading-[20px]">{rowdata}</td>
// //                                         </tr>
// //                                     ))
// //                                 }
// //                             </>

// //                         </div>)}
// //                     </table>}
// //                     <div className="flex gap-x-[25px] items-center pb-[7px]">
// //                         <div className="w-[205px] flex gap-x-[5px] items-center">
// //                             {item.consumelbl && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{item.consumelbl}</span>}
// //                             {item.consumevalue && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{item.consumevalue}</span>}
// //                         </div>
// //                         <div className="w-[205px] flex gap-x-[5px] items-center ">
// //                             {item.balancelbl && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{item.balancelbl}</span>}
// //                             {item.balancevalue && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{item.balancevalue}</span>}
// //                         </div>
// //                     </div>
// //                     {item.isProgressbar && <div className="flex justify-between w-[418px]"><Progressbar type={item.progressbarType} progressData={item.progressbardata} className="top-[-5px] right-[-30px]"/></div>}
// //                     {item.engagments && <span className={`${innerTextColor} ${engagmentsStyling} text-[14px] font-[500] leading-[20px]`}>{item.engagments}</span>}
// //                     {item.version && <span className="text-[14px] text-[#fff] font-bold leading-[20px] capitalize">{item.version}</span>}
// //                 </div>
// //             ))}
// //         </>
// //     );
// // }

// // export default Card;

// import React from "react";
// import Progressbar from "../progressbar/progressbar";

// const TagList = ({ tags }) => (
//   <ul className="w-[220px] flex justify-between pe-[23px]">
//     {tags.map((tagItem, index) => (
//       <li
//         className="text-[10px] text-[#000] font-[500] list-disc list-disc-[#fff] leading-[20px]"
//         key={index}
//       >
//         {tagItem.taginner}
//       </li>
//     ))}
//   </ul>
// );

// const StatsList = ({ stats, innerTextColor, statsStyling }) => (
//   <div className="flex justify-between pb-[6px]">
//     {stats.map((statsItem, index) => (
//       <div className="flex flex-col" key={index}>
//         <span className="text-[#606465] text-[24px] font-[500] leading-[20px] pb-[3px]">
//           {statsItem.digit}
//         </span>
//         <span className="text-[#606465] text-[14px] font-[500] leading-[20px]">
//           {statsItem.status}
//         </span>
//       </div>
//     ))}
//   </div>
// );

// const Table = ({ data }) => (
//   <table className="w-[px] flex justify-between pe-[40px]">
//     {data.map((rowData, index) => (
//       <div className="flex flex-col" key={index}>
//         <tr>
//           <th className="text-[#606465] text-[14px] font-[500] leading-[20px] pb-[20px]">
//             {rowData.tabletitle}
//           </th>
//         </tr>
//         {rowData.isProgressbar ? (
//           <div className="flex flex-col w-[116px] gap-y-[33px] pt-[6px]">
//             <Progressbar
//               type={rowData.progressbarType}
//               progressData={rowData.rows}
//               className="top-[-20px] right-[0px]"
//             />
//           </div>
//         ) : (
//           rowData.rows.map((rowdata, rowindex) => (
//             <tr key={rowindex} className="pb-[20px]">
//               <td className="text-[#606465] text-[14px] font-[500] leading-[20px]">
//                 {rowdata}
//               </td>
//             </tr>
//           ))
//         )}
//       </div>
//     ))}
//   </table>
// );

// const ConsumableBalance = ({ label, value }) => (
//   <div className="w-[205px] flex gap-x-[5px] items-center">
//     {label && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{label}</span>}
//     {value && <span className="text-[12px] text-[#606465] font-[500] leading-[20px]">{value}</span>}
//   </div>
// );

// const Card = ({ className, CardData, innerTextColor, statsStyling, titleWeight, engagmentsStyling, titleStyling }) => (
//   <>
//     {CardData && CardData.length > 0 && CardData.map((item, index) => (
//       <div key={index} className={`${className} w-[188px]`}>
//         <div className="flex justify-between">
//           {item.title && (
//             <span className={`${titleStyling} ${titleWeight} text-[14px] leading-[20px]`}>
//               {item.title}
//             </span>
//           )}
//           {Array.isArray(item.tag) ? <TagList tags={item.tag} /> : (item.tag && <span className="text-[#72BFBD] text-[12px] font-[500] pe-[14px] ">{item.tag}</span>)}
//         </div>
//         {/* <StatsList stats={item.stats} innerTextColor={innerTextColor} statsStyling={statsStyling} /> */}
//         {item.isTable && <Table data={item.broadcastTableData} />}
//         <div className="flex gap-x-[25px] items-center pb-[7px]">
//           <ConsumableBalance label={item.consumelbl} value={item.consumevalue} />
//           <ConsumableBalance label={item.balancelbl} value={item.balancevalue} />
//         </div>
//         {item.isProgressbar && (
//           <div className="flex justify-between w-[418px]">
//             <Progressbar type={item.progressbarType} progressData={item.progressbardata} className="top-[-5px] right-[-30px]"/>
//           </div>
//         )}
//         {item.engagments && (
//           <span className={`${innerTextColor} ${engagmentsStyling} text-[14px] font-[500] leading-[20px]`}>
//             {item.engagments}
//           </span>
//         )}
//         {item.version && <span className="text-[14px] text-[#fff] font-bold leading-[20px] capitalize">{item.version}</span>}
//       </div>
//     ))}
//   </>
// );

// export default Card;



const Card =({className, children})=> <div className={`${className}`}>
  {children}
</div>
 export default Card