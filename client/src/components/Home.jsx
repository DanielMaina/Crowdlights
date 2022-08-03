import React, {useContext} from 'react'
import Slider from './Slider'

import { CrowdlightsContext } from "../context/CrowdlightsContext";


const Home = () => {
    // handleSubmit = () => {
    //     // console.log('submit')
    // }

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(CrowdlightsContext);

    const handleSubmit = (e) => {
        const { addressTo, first, second, third, fourth, fifth, total } = formData;

        e.preventDefault();

        if(!addressTo || !first || !second || !third || !fourth || !fifth || !total){
            return;
        }
        else{
            sendTransaction();
        }

    };

    return (
        <div class="grid space-x-1 lg:grid-cols-1">
            <div class="px-4 py-4 rounded">
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <div class="p-6">
                        <h4 class="text-center text-gray-900 text-xl font-medium mb-2">Mint NFT </h4>
                        <p class="text-center text-gray-900 text-xs mb-4">Remaining NFTs </p>
                        <br/>  
                            <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 lg:ml-64 p-3 border border-gray-400 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                                {/* <AiFillPlayCircle className="mr-2 text-white" /> */}
                                <p className="text-base font-semibold text-black">
                                Connect Wallet
                                </p>
                            </button>              
                        <hr/>
                        <br/>
                            <div class="grid grid-cols-3 gap-4">
                                <p class="text-left text-gray-700 text-base mb-4">Amount </p>                          
                                <div class="col-end-7 col-span-2">
                                    <select class="block appearance-none w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                            id="grid-state"
                                            handleChange={ handleChange }>
                                        <option type="number" name='first'>1</option>
                                        <option type="number" name='second'>2</option>
                                        <option type="number" name='third'>3</option>
                                        <option type="number" name='fourth'>4</option>
                                        <option type="number" name='fifth'>5</option>
                                    </select>
                                </div>                        
                            </div>    
                        <hr/>
                        <br/>
                            <div class="grid grid-cols-2 gap-4">
                                <p class="text-left text-gray-700 text-base mb-4">Total </p>
                                <p class="text-right text-gray-700 text-xs mb-4">Total </p>
                            </div> 
                        <br/>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="col-start-1 col-end-7">
                                    <button type="button" 
                                            class="px-20 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                                            onClick={ handleSubmit }
                                            >
                                                Buy
                                    </button>                 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Home