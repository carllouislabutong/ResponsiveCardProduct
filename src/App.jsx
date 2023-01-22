import img from "./pictures/img.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="  h-screen flex justify-center items-center bg-yellow-50 "
      id="mainContainer"
    >
      <div className="flex bg-white rounded-md  " id="container">
        <img
          src={img}
          alt="perfume"
          className=" min-h-full w-[19rem]  rounded-l-md object-cover"
          id="picture"
        />
        <div className=" p-7">
          <p className=" tracking-[0.50rem] text-slate-500" id="tagP">
            PERFUME
          </p>
          <h1 className=" font-bold text-[2.5rem] leading-10 mt-4">
            Grabielle <span className="block"> Essence Eau </span>De Parfum
          </h1>
          <p className="text-slate-500 mt-4">
            A floral,solar and voluptuous{" "}
            <span className=" block">interpretation composed by</span>{" "}
            <span className="block">Olivier Polge,Perfumer-Creator</span>
            for the house of CHANEL.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <h1 className=" text-green-900 font-extrabold text-[2rem]">
              $149.99
            </h1>
            <h1 className=" line-through text-slate-400 text-[0.80rem]">
              $169.99
            </h1>
          </div>
          <div className="text-white bg-green-800 hover:bg-green-900 flex gap-2  justify-center py-3 mt-4 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.9"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <button className="font-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
