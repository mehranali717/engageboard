// import React from "react";

import React from "react"

// const StandardPlanCard = ({ CardData, className, cardTitleStyling, cardStatsStyling, cardEngagementStyling, cardVersionStyling }) => {
//     console.log({ CardData });
//     return <React.Fragment>
//         {CardData.map((Data, index) => <div className={`${className}`} key={index}>
//             <div className=" flex flex-col Datas-center">
//                 {Data.title && <span className={`${cardTitleStyling}`}>{Data.title}</span>}
//                 {Data.stats && <span className={`${cardStatsStyling}`} >{Data.stats}<span className="text-[12px]">{Data.per}</span></span>}
//                 {Data.engagments && <span className={`${cardEngagementStyling}`}>{Data.engagments}</span>}
//                 {Data.version && <span className={`${cardVersionStyling}`}>{Data.version}</span>}
//             </div>
//         </div>)}
//     </React.Fragment>
// }
// export default StandardPlanCard

const StandardPlanCards = ({ Data, titleStyling, statsStyling, engagementStyling }) => {
    return <React.Fragment>
        <div className=" flex flex-col Datas-center">
            {Data.title && <span className={`${titleStyling}`}>{Data.title}</span>}
            {Data.stats && <span  className={`${statsStyling}`}>{Data.stats}<span className="text-[12px]">{Data.per}</span></span>}
            {Data.engagments && <span className={`${engagementStyling}`}>{Data.engagments}</span>}
            {Data.version && <span >{Data.version}</span>}
        </div>
    </React.Fragment>
}
export default StandardPlanCards