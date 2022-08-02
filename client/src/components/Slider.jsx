import React, {useContext} from 'react'
import { CrowdlightsContext } from "../context/CrowdlightsContext";


const Slider = () => { 
  const { formData, setFormData, handleChange } = useContext(CrowdlightsContext);
  const [state, set] = useState(0);

  const increment = () => {
    set((prev) => prev + 1);
  };
  const decrement = () => {
    set((prev) => prev - 1);
  };
  const toggleMax = () => {
    if (state === 5) {
      set(0);
    } else {
      set(5);
    }
  };

  return (
    // <div class="relative pt-1">
    //     <input
    //         type="range"
    //         class="
    //         form-range
    //         appearance-none
    //         w-full
    //         h-6
    //         p-0
    //         bg-transparent
    //         focus:outline-none focus:ring-0 focus:shadow-none
    //         "
    //         step="1"
    //         min="1"
    //         max="5"
    //         id="customRange2"
    //         handleChange={handleChange}
    //     />
    // </div>
    // <div className="flex flex-col space-y-2 p-2 w-60">
    //   <input type="range" class="w-full" min="1" max="5" step="1" handleChange={handleChange}/>
    //     <ul className="flex justify-between w-full px-[10px]">
    //         <li className="flex justify-center relative"><span className="absolute">1</span></li>
    //         <li className="flex justify-center relative"><span className="absolute">2</span></li>
    //         <li className="flex justify-center relative"><span className="absolute">3</span></li>
    //         <li className="flex justify-center relative"><span className="absolute">4</span></li>
    //         <li className="flex justify-center relative"><span className="absolute">5</span></li>
    //     </ul>
    // </div>

  <>
  <button onClick={toggleMax}>{state === 5 ? "Min" : "Max"}</button>
  <div style={{ display: "flex", gap: "1rem" }}>
    <button disabled={state >= 5} onClick={increment}>
      +
    </button>
    <div>{state}</div>
    <button disabled={state <= 0} onClick={decrement}>
      -
    </button>
  </div>
  </>
  )
}

export default Slider