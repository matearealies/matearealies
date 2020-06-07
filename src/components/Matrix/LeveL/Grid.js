import React, { useState, useGlobal, memo }  from "reactn"
import arrayMove from "array-move";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "./Photo";

export function Grid (props) {  
  const [gifs, setGifs] = useGlobal('gifs')
  const moments = gifs.map((src, idx) => {
    return {
      key: 'gif' + idx,
      src: src,
      width: 4,
      height: 4
  }})
  const [items, setItems] = useState(moments);
  const onSortEnd = ( oldIndex, newIndex ) => {
    // setItems(arrayMove(items, oldIndex, newIndex));
    setItems(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }))
  }
  /* popout the browser and maximize to see more rows! -> */
  const SortablePhoto = SortableElement(item => <Photo {...item} />);
  const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
  ))/*
   _     _  _    _|_ _ 
  (/_>< (/_(_ |_| |_(/_
  */
 return (
  <>
    <SortableGallery
      items={moments}
      onSortEnd={onSortEnd}
      axis={"xy"}
    />
  </>
  )
}
export default memo(Grid)