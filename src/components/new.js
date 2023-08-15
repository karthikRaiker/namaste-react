card?.card?.gridElements?.infoWithStyle?.restaurants;
<div className="restro-cardlist">
  {filterData.length > 0 ? (
    filterData.map((product) => {
      return <ProductCard {...product} key={product.id} />;
    })
  ) : (
    <div>No Product match your Filter! {searchText}</div>
  )}
</div>;
