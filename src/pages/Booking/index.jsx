import './style.css'
import { Input, Select, Form, InputNumber,Checkbox } from 'antd'
import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';

const foodOptions = [
    'Món 1', 'Món 2', 'Món 3', 'Món 4', 'Món 5', 'Món 6', 'Món 7', 'Món 8', 'Món 9', 'Món 10'
];

const getRandomFoods = (num) => {
    const shuffled = foodOptions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};
const Booking = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [numOfGuest, setNumOfGuest] = useState(null);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [selectedFoods, setSelectedFoods] = useState([]);

    const handleSubmit = () => {
        const values = {name,email,numOfGuest};
        console.log(values);
        setShowSecondForm(checkedValues);
    }

    return (
        <>
            <div className='booking'>
                <div className={`background-image ${showSecondForm ? 'slide-out' : 'slide-in'}`}>
                {!showSecondForm ? (
                    <div className='box-booking'>
                        <p className='title'><h1>RESERVATION</h1></p>
                        <form className='form-booking'>
                            <div className="name-email">
                                <div className="name" ><Input placeholder="Name" variant="borderless" value={name} onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className="email"><Input placeholder="Email" variant="borderless" value={email} onChange={(e)=> setEmail(e.target.value)} type="email"/></div>
                            </div>
                            <div className='date-time'>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className='date'
                                />
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="time"
                                />
                            </div>
                            <div className='date-time'>
                                <div className="name"><Input placeholder="Phone" variant="borderless" required/></div>
                                <div className="email"><InputNumber placeholder="Number of Guest" variant="borderless" type='number' value={numOfGuest} onChange={(value)=>setNumOfGuest(value)} min={1} max={10}style={{ width: 200 }} required/></div>  
                            </div>
                            <div className="select-table" >
                                <Select
                                    placeholder="Chọn loại bàn"
                                    variant="borderless"
                                    style={{
                                        flex: 1, width: 450
                                    }}
                                    options={[
                                        {
                                            value: 'Bàn 4 người',
                                            label: 'Bàn 4 người',
                                        },
                                        {
                                            value: 'Bàn 10 người',
                                            label: 'Bàn 10 người',
                                        },
                                        {
                                            value: 'Phòng VIP',
                                            label: 'Phòng VIP',
                                        },
                                    ]}
                                    required
                                />
                            </div>
                            <div className="select-table" >
                                <Select
                                    placeholder="Chọn chi nhánh"
                                    variant="borderless"
                                    style={{
                                        flex: 1, width: 450
                                    }}
                                    options={[
                                        {
                                            value: 'Hà Nội',
                                            label: 'Hà Nội',
                                        },
                                        {
                                            value: 'TPHCM',
                                            label: 'TPHCM',
                                        },
                                        {
                                            value: 'Hải Phòng',
                                            label: 'Hải Phòng',
                                        },
                                    ]}
                                    required
                                />
                            </div>
                            
                            <button className="reverse-button"onClick={handleSubmit}>
                                RESERVE NOW
                                <div className="icon">
                                    <RightOutlined />
                                </div>
                            </button>
                        </form>

                    </div>
                    ) : (
                        <div className='box-booking'>
                        <p className='title'><h1>XÁC NHẬN ĐẶT CHỖ</h1></p>
                        <form className='form-booking'>
                            <p>Cảm ơn bạn đã đặt chỗ! Vui lòng chọn các món ăn:</p>
                            <Checkbox.Group options={foodOptions} value={selectedFoods} onChange={handleFoodChange} />
                        </form>
                    </div>
                )}
                </div>
            </div>


        </>
    )
}

export default Booking;