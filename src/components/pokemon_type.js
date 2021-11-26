import React, {useState, useEffect} from "react";
import styled from "styled-components";

export const Types = ({type}) => {
    return (
        
        <Types> {pokemon.types.map(type => (type.name)).join(' | ') } </Types>
    );
};


