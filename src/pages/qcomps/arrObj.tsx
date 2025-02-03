import { useState } from "react";
import { ItemListProps } from "../../types/arrObj";

let nextId = 3;

type ArtWorkListType = {
  id: number;
  title: string;
  seen: boolean;
};

const initialList: ArtWorkListType[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

/**
 * The component renders two lists of artworks, each with a checkbox to mark the artwork as seen.
 * However, the lists are coupled, that is, checking a box in one list will also check the box in the other list.
 * Decouple the lists, that is, checking a box in one list should have no impact on the other list?
 */
export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  /**
   * The function updates the seen property of the artwork with the given id in the mylist.
   * @param artworkId - the id of the artwork to toggle
   * @param nextSeen - the value with which to update the seen property of the artwork
   */
  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    const tmpList = toggleList(myList, artworkId, nextSeen);
    setMyList(tmpList);
  }

  /**
   * The function updates the seen property of the artwork with the given id in the yourlist.
   * @param artworkId - the id of the artwork to toggle
   * @param nextSeen - the value with which to update the seen property of the artwork
   */
  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    const tmpList = toggleList(yourList, artworkId, nextSeen);
    setYourList(tmpList);
  }

  function toggleList(
    aList: ArtWorkListType[],
    artworkId: number,
    nextSeen: boolean
  ) {
    const tmpList = aList.map((e) => {
      if (e.id === artworkId) {
        return { ...e, seen: nextSeen };
      }
      return e;
    });
    return tmpList;
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
