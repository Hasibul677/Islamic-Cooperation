import React, { useEffect, useState } from 'react';
import Cost from '../Cost/Cost';
import LectureHire from '../LectureHire/LectureHire';
import './Lecturer.css'

const Lecturer = () => {
    // using state for load fakeData
    const [lecturers, setLecturers]=useState([]);
    const [cart, setCart] = useState([]);
    const [keys, setKeys] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=> res.json())
        .then(data => setLecturers(data))
    },[]);

    const hireHandeler =lecturer=>{
        if(!keys.includes(lecturer.key)){
            const adding = [...cart, lecturer];
            setCart(adding);
            setKeys([...keys,lecturer.key]);
        }
        else{
            alert('This Member Already Hire by You');
        }
    }
    return (
       <div className='parent mt-5'>

        {/* LectureHire part */}
            <div className="row row-cols-1 row-cols-md-3 g-5 ms-3">
                {
                    lecturers.map(lecture=><LectureHire 
                        key={lecture.key} 
                        lecturer={lecture}
                        hireHandeler={()=>hireHandeler(lecture)}></LectureHire>)
                }
            </div>
            {/* cart information part */}
            <div className='mx-2'>
             <Cost cart={cart}></Cost>
            </div>
            
       </div>
    );
};

export default Lecturer;