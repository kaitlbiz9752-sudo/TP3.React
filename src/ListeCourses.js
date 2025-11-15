// src/ListeCourses.js
function ListeCourses({ items }) {
  if (!items || items.length === 0) {
    return <p>Aucun article dans la liste.</p>;
  }

  return (
    <ul>
      {items.map((article, index) => (
        <li key={index}>{article}</li>
      ))}
    </ul>
  );
}

export default ListeCourses;
