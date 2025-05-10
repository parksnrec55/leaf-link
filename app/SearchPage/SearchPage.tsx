import { useState } from "react";
import type { SearchParams } from "~/model/SearchParams";
import SearchForm from "~/SearchForm/SearchForm";

export default function SearchPage(){
    const[result, setResult] = useState('');
    const[testInput, setTestInput] = useState('');

    function submitQuery(params: SearchParams) {
        let format = JSON.stringify(params).split(",").join(", ");
        setResult(format);
    }
    return (
        <div>
            <div className="grid grid-cols-3 py-10">
                <div></div>
                <div>
                    <h1 className="text-sky-200 text-center pr-5 text-6xl">Leaf Link</h1>
                </div>
            </div>

            <SearchForm onSearch={e => {submitQuery(e)}}/>
                
            <div className="justify-center pt-15 mx-10 text-wrap text-center">
                    <p className="text-sky-200 ">Submitted query: {result}</p>
            </div>

        </div>
);

}


