import React, { useState } from 'react';
import {DataContext} from "../context";

export default function DataProvider(props) {
   const [data, setData] = useState({
     results: [],
     isLoading: false,
     isError: false,
   });;

  return <DataContext.Provider value={[data, setData]} {...props} />;
}
