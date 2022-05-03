import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import  { List, AutoSizer, ListRowRenderer } from 'react-virtualized'
interface SearchResultsProps {
    totalPrice: number;
    
    results: Array<{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({results, totalPrice, onAddToWishList}: SearchResultsProps) {
    const rowRenderer:ListRowRenderer = ({index, key, style }) => {
        return (
            <div key={key} style={style}>
            <ProductItem 
            
            product={product}
            onAddToWishList={onAddToWishList} />

            </div>
           
        )
    }
    
    return (
        <div>
            <h2>{totalPrice}</h2>
            <List 
            height={300}
            rowHeight={30}
            width={900}
            overscanRowCount={5}
            rowCount={results.length}
            rowRender={}
            />
           {/*  {results.map(product => {
                return (
                   <ProductItem product={product}/> 
                )
            })} */}
        </div>
    )
}