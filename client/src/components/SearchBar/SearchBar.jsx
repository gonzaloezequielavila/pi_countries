import axios from 'axios';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../redux/actions/actions'


const SearchBar = () => {

  const dispatch = useDispatch();

  const {countries} = useSelector (state=>{
    return state;
  })

  return (
    <div>


    </div>
  )
};

export default SearchBar;