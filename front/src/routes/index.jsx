import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutA from "../components/layouts/a";
import Login from "../pages/login"

// import {useEffect, useState, } from "react"
import React, { Suspense } from "react";



function PagesRouter() {
    // let [item, setDataItem] = useState();

    // Function to collect data
    // const getApiData = async (url) => {
    //     const response = await fetch(
    //         url
    //     ).then((response) => {
    //         // console.log(response)
    //         return response.json()
    //     });
    //     setDataItem(await response);
    // };


    // useEffect(() => {
    //     getApiData("/list.php");

    // }, []);
    var loged =false;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {!loged &&
                        < Route path="/" element={<Login/>}>
                        </Route>
                    }
                    {
                        loged &&
                        < Route path="/" element={<LayoutA />}>
                            <Route path="" element={
                                <Suspense fallback={<div>Carregando...</div>}>
                                    <Route path="" element={<></>} />
                                </Suspense>
                            } />
                        </Route>
                    }


                </Routes>
            </BrowserRouter>

        </>
    )

}
export default PagesRouter