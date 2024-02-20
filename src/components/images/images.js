const Images = ({ image, className, imgWrapper }) => <div className={`${imgWrapper}`}>
    <img
        src={image}
        alt="logo is here"
        className={`${className}`} />
</div>
export default Images