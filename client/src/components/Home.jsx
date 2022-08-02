import React, {useContext} from 'react'
import Slider from './Slider'
import { CrowdlightsContext } from "../context/CrowdlightsContext";


const Home = () => {
    // handleSubmit = () => {
    //     console.log('submit')
    // }
    const { connectWallet, currentAccount, formData, setFormData, handleChange } = useContext(CrowdlightsContext);

    return (
        <div class="grid space-x-1 lg:grid-cols-1">
            <div class="px-4 py-4 rounded">
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <div class="p-6">
                        <h4 class="text-center text-gray-900 text-xl font-medium mb-2">Mint NFT </h4>
                        <p class="text-center text-gray-900 text-xs mb-4">Remaining NFTs </p>
                        <br/>
                            <div class="grid grid-cols-2 gap-4">
                                <p class="text-left text-gray-700 text-base mb-4">Balance </p>
                                <p class="text-right text-gray-700 text-xs mb-4">Balance </p>
                            </div>                    
                        <hr/>
                        <br/>
                            <div class="grid grid-cols-3 gap-4">
                                <p class="text-left text-gray-700 text-base mb-4">Amount </p>
                                <div class="col-start-2 col-span-4">
                                <Slider/>
                                </div>                            
                                <div class="col-end-7 col-span-2">
                                <button type="button" class=" inline-block px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Max </button>
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
                                    <button type="button" class="px-20 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={{}}>Buy</button>                 
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