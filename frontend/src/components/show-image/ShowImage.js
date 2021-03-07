const ShowImage = ({ product, classname }) => {
  return (
    <div>
      <img className={classname} src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ShowImage;
