import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progressbar.css"
import React from 'react';

const Progressbar = ({ progressData, type, className=0 }) => {
    return (
        <>
            {progressData && progressData.map((item, index) => (
                <React.Fragment key={index}>
                    {type == "circular" && <div className='flex flex-col items-center' >
                        <CircularProgressbar value={item.progressValue} text={`${item.progressValue}%`} />
                        <span className='text-[10px] text-[#606465] leading-[20px] font-[400] pt-[5px]'>{item.progressLabel}</span>
                    </div>}
                    {type == "horizontal" && <div className='flex items-center gap-x-[5px] relative'>
                        <ProgressBar now={item.progressValue} label={`${item.progressValue}%`} visuallyHidden/>
                        <span className={`${className} text-[12px] text-[#606465] font-[500] leading-[20px] absolute`}>{`${item.progressValue}%`}</span>
                    </div>}
                </React.Fragment>
            ))}
        </>
    );
}
export default Progressbar