import { useState } from "react";
import SearchForm from "~/SearchForm/SearchForm";

export default function SearchPage(){
    const[result, setResult] = useState('');
    const[testInput, setTestInput] = useState('');

    
    return (
        <div>
            <div className="grid grid-cols-3 pt-10">
                <div></div>
                <div>
                    <h1 className="text-sky-200 text-center pr-5 text-4xl">Start by entering variable values</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 pt-15">
                <div></div>
                <div className="flex justify-center">
                    <h2 className="text-sky-200 text-right pr-5 text-base">Test input</h2><input  onChange={e => setTestInput(e.target.value)} className="bg-sky-200 text-sky-950 rounded-xs" name="test input" /> <button onClick={e =>setResult(result + testInput)}className="text-center w-20 bg-sky-100 mx-8 text-sky-950 rounded-lg hover:bg-sky-950 hover:text-sky-100">Enter</button>
                </div>
                <div></div>
            </div>
            <div className="grid grid-cols-3 pt-15">
                <div></div>
                <div className="flex justify-center">
                    <h2 className="text-sky-200 text-center pr-5 text-base">Typed input: {result}</h2>
                </div>
                <div></div>
            </div>
            <SearchForm onSearch={e => {}}/>

        </div>
);

}


