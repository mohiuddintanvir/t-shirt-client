import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const BookingModal = () => {

    const { register, handleSubmit } = useForm();


    const handlemodaldata=order=>{
        console.log(order)

        fetch('https://tshirt-website-server.vercel.app/orders',
        {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Order Confirm')
        })

    }
    return (
        <div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <div className="input-field">
                        <form action=""onSubmit={handleSubmit(handlemodaldata)}>
                                    <input type="email" {...register("email")}  className="input" placeholder="Email" id='email' autocomplete="off" required />
                                    <input type="number"  {...register("number")}  className="input" placeholder="Phone Number" id='number' autocomplete="off" required />
                                    
                                    <input type="text" {...register("T_shirtSize")}  className="input" placeholder="T_shirtSize" id='T_shirtSize' autocomplete="off" required />



                                    <div className="">
                                    <input type="submit" className='submit' value="Submit" />
                                    <button type="button" class="btn btn-secondary ml-3" data-bs-dismiss="modal">Close</button>

                                </div>
                                    </form>
                                </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;