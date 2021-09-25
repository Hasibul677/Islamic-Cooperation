import React, { useEffect, useState } from 'react';
import LectureHire from '../LectureHire/LectureHire';
import './Lecturer.css'

const Lecturer = () => {
    // using state for load fakeData
    const [lecturers, setLecturers]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=> res.json())
        .then(data => setLecturers(data))
    },[]);
    return (
       <div className='parent mt-5'>
        {/* LectureHire part */}
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    lecturers.map(lecture=><LectureHire key={lecture.key} lecturer={lecture}></LectureHire>)
                }
            </div>
            <div>
            
            </div>
       </div>
    );
};

export default Lecturer;